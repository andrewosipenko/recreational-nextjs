'use client';

import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { Hotel, parseHotelsFromCSV } from '../utils/csvParser';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader, MarkerClusterer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 52.237049,
  lng: 21.017532
};

export default function HotelMap() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [mounted, setMounted] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places']
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const loadHotels = async () => {
      try {
        console.log('Loading hotels from CSV...');
        const response = await fetch('/data/poland.csv');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvContent = await response.text();
        console.log('CSV content loaded, length:', csvContent.length);
        
        const parsedHotels = parseHotelsFromCSV(csvContent);
        console.log('Parsed hotels:', parsedHotels.length);
        
        setHotels(parsedHotels);
      } catch (error) {
        console.error('Error loading hotels:', error);
        // Set some sample data for testing
        const sampleHotels: Hotel[] = [
          {
            id: 'SAMPLE-1',
            name: 'Sample Hotel 1',
            website: 'www.sample1.com',
            latitude: 52.2297,
            longitude: 21.0122,
            inForest: 0.5
          },
          {
            id: 'SAMPLE-2',
            name: 'Sample Hotel 2',
            website: 'www.sample2.com',
            latitude: 50.0647,
            longitude: 19.9450,
            inForest: 1.2
          }
        ];
        setHotels(sampleHotels);
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, [mounted]);

  const onLoad = useCallback((map: any) => {
    console.log('Map loaded:', map);
  }, []);

  const onUnmount = useCallback(() => {
    console.log('Map unmounted');
  }, []);

  const handleMarkerClick = (hotel: Hotel) => {
    setSelectedHotel(selectedHotel?.id === hotel.id ? null : hotel);
  };

  // Show a simple loading state that matches server and client
  if (!mounted || !isLoaded) {
    return (
      <Paper sx={{
        height: '100%',
        width: '100%',
        maxWidth: '64rem',
        mx: 'auto',
        elevation: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
        overflow: 'hidden'
      }}>
        <Box 
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9fafb'
          }}
        >
          <Typography>Loading map...</Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper sx={{
      height: '100%',
      width: '100%',
      maxWidth: '64rem',
      mx: 'auto',
      elevation: 3,
      boxShadow: 3,
      borderRadius: 2,
      backgroundColor: 'background.paper',
      overflow: 'hidden'
    }}>
      <Box 
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            mapTypeId: 'hybrid',
            mapTypeControl: false,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          }}
        >
          <MarkerClusterer
            options={{
              gridSize: 40,
              maxZoom: 15,
              minimumClusterSize: 2,
              styles: [
                {
                  url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="18" fill="#1976d2" stroke="white" stroke-width="2"/>
                    </svg>
                  `),
                  width: 40,
                  height: 40,
                  textColor: 'white',
                  textSize: 14
                }
              ]
            }}
          >
            {(clusterer) => (
              <>
                {hotels.map((hotel) => (
                  <Marker
                    key={hotel.id}
                    position={{ lat: hotel.latitude, lng: hotel.longitude }}
                    onClick={() => handleMarkerClick(hotel)}
                    title={hotel.name}
                    clusterer={clusterer}
                  />
                ))}
              </>
            )}
          </MarkerClusterer>

          {selectedHotel && (
            <InfoWindow
              position={{ lat: selectedHotel.latitude, lng: selectedHotel.longitude }}
              onCloseClick={() => setSelectedHotel(null)}
            >
              <div style={{ padding: '8px', maxWidth: '250px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>
                  {selectedHotel.name}
                </h3>
                {selectedHotel.website && (
                  <p style={{ margin: '4px 0', fontSize: '14px', color: '#666' }}>
                    <a 
                      href={`https://${selectedHotel.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#1976d2', textDecoration: 'none' }}
                    >
                      {selectedHotel.website}
                    </a>
                  </p>
                )}
                <p style={{ margin: '4px 0', fontSize: '12px', color: '#888' }}>
                  Forest distance: {selectedHotel.inForest}km
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
        
        {/* Loading indicator */}
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
              zIndex: 5
            }}
          >
            <Typography>Loading hotels...</Typography>
          </Box>
        )}

        {/* Hotel count indicator */}
        {!loading && (
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              left: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: 1.5,
              borderRadius: 2,
              boxShadow: 2,
              backdropFilter: 'blur(4px)',
              zIndex: 5
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {hotels.length} hotels loaded
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
} 