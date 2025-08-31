'use client';

import { Box, IconButton, Paper, Typography, Divider } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useEffect, useState } from 'react';
import { Hotel, parseHotelsFromCSV, normalizeCoordinates } from '../utils/csvParser';
import dynamic from 'next/dynamic';

// Dynamically import HotelCard to avoid SSR issues
const HotelCard = dynamic(() => import('./HotelCard'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Map() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [mounted, setMounted] = useState(false);

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

  const handleHotelClick = (hotel: Hotel) => {
    setSelectedHotel(selectedHotel?.id === hotel.id ? null : hotel);
  };

  const renderHotelMarker = (hotel: Hotel, index: number) => {
    const position = normalizeCoordinates(hotel.latitude, hotel.longitude);
    const isSelected = selectedHotel?.id === hotel.id;
    
    return (
      <Box
        key={hotel.id}
        sx={{
          position: 'absolute',
          top: `${position.top}%`,
          left: `${position.left}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: isSelected ? 3 : index === 0 ? 2 : 1
        }}
      >
        <IconButton
          onClick={() => handleHotelClick(hotel)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              '& .marker-icon': {
                transform: 'scale(1.1)',
              },
              '& .marker-label': {
                opacity: 1,
              }
            }
          }}
        >
          <Box sx={{
            width: isSelected ? 56 : index === 0 ? 48 : 40,
            height: isSelected ? 56 : index === 0 ? 48 : 40,
            backgroundColor: isSelected ? '#dc2626' : index === 0 ? '#dc2626' : 'primary.main',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isSelected ? 6 : index === 0 ? 4 : 2,
            transform: 'transition: all 0.3s ease',
            border: isSelected ? '4px solid rgba(220, 38, 38, 0.6)' : index === 0 ? '4px solid rgba(220, 38, 38, 0.3)' : 'none',
            '&:hover': {
              border: isSelected ? '4px solid rgba(220, 38, 38, 0.8)' : index === 0 ? '4px solid rgba(220, 38, 38, 0.5)' : 'none',
              boxShadow: 4,
            }
          }} className="marker-icon">
            <HotelIcon 
              sx={{ 
                color: 'white', 
                fontSize: isSelected ? '1.75rem' : index === 0 ? '1.5rem' : '1.25rem' 
              }} 
            />
          </Box>
          <Paper
            sx={{
              mt: 1,
              px: 1.5,
              py: 0.5,
              borderRadius: '50px',
              boxShadow: 2,
              opacity: isSelected ? 1 : 0,
              transition: 'opacity 0.3s ease',
              maxWidth: 200,
              textAlign: 'center'
            }}
            className="marker-label"
          >
            <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.primary' }}>
              {hotel.name}
            </Typography>
            {hotel.website && (
              <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontSize: '0.7rem' }}>
                {hotel.website}
              </Typography>
            )}
          </Paper>
        </IconButton>
      </Box>
    );
  };

  // Show a simple loading state that matches server and client
  if (!mounted) {
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
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYZPgJZD-qulXe0l3X2rDqBU83tQS8cMg7DybSNB1RxidkFxFQ6eqD_J7u9xwYCgy6zPyhsu6IboEQ5KT2ZiXtvqCtDFIbEyLY1mRg8j8s1-uWg4A9xGnbBaesl-Yq69hokP7yJ6kHrnslWTz05555AK3s1_E5a4Ri2IKjUa04YDsDXepfsP-bVZe0IdaexN5LPraOpClrEaFONuSs3Ac4pzRW5IO02dLvqEQvgEFHu5LbwHuQB73ulj9179_F6z0dEYWZ4XRB5lU")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden',
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
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYZPgJZD-qulXe0l3X2rDqBU83tQS8cMg7DybSNB1RxidkFxFQ6eqD_J7u9xwYCgy6zPyhsu6IboEQ5KT2ZiXtvqCtDFIbEyLY1mRg8j8s1-uWg4A9xGnbBaesl-Yq69hokP7yJ6kHrnslWTz05555AK3s1_E5a4Ri2IKjUa04YDsDXepfsP-bVZe0IdaexN5LPraOpClrEaFONuSs3Ac4pzRW5IO02dLvqEQvgEFHu5LbwHuQB73ulj9179_F6z0dEYWZ4XRB5lU")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Hotel markers */}
        {!loading && hotels.map((hotel, index) => renderHotelMarker(hotel, index))}
        
        {/* Selected hotel card */}
        {selectedHotel && (
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 10
            }}
          >
            <HotelCard 
              hotel={selectedHotel} 
              onClose={() => setSelectedHotel(null)}
            />
          </Box>
        )}
        
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
              boxShadow: 2
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

        {/* Zoom controls */}
        <Box sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          zIndex: 10
        }}>
          <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(4px)',
            overflow: 'hidden'
          }}>
            <IconButton
              sx={{
                p: 1.5,
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
                '&:focus': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              <AddIcon sx={{ fontSize: '1.25rem' }} />
            </IconButton>
            <Divider />
            <IconButton
              sx={{
                p: 1.5,
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
                '&:focus': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              <RemoveIcon sx={{ fontSize: '1.25rem' }} />
            </IconButton>
          </Paper>
          <IconButton
            sx={{
              p: 1.5,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(4px)',
              borderRadius: 3,
              boxShadow: 2,
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&:focus': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            <NearMeIcon sx={{ fontSize: '1.25rem' }} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
} 