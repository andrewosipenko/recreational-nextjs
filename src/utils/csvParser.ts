export interface Hotel {
  id: string;
  name: string;
  website: string;
  latitude: number;
  longitude: number;
  inForest: number;
}

export function parseHotelsFromCSV(csvContent: string): Hotel[] {
  try {
    const lines = csvContent.trim().split('\n');
    
    if (lines.length < 2) {
      console.warn('CSV file is too short or empty');
      return [];
    }
    
    const headers = lines[0].split(';');
    console.log('CSV headers:', headers);
    
    // Skip header row and parse data
    const hotels: Hotel[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      try {
        const line = lines[i];
        const values = line.split(';');
        
        if (values.length >= 6) {
          const hotel: Hotel = {
            id: values[0] || '',
            name: values[1] || '',
            website: values[2] || '',
            latitude: parseFloat(values[3]) || 0,
            longitude: parseFloat(values[4]) || 0,
            inForest: parseFloat(values[5]) || 0
          };
          
          // Only add hotels with valid coordinates
          if (hotel.latitude !== 0 && hotel.longitude !== 0) {
            hotels.push(hotel);
          }
        }
      } catch (lineError) {
        console.warn(`Error parsing line ${i}:`, lineError);
        continue;
      }
    }
    
    console.log(`Successfully parsed ${hotels.length} hotels`);
    return hotels;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
}

// Poland's approximate bounds for coordinate normalization
const POLAND_BOUNDS = {
  minLat: 49.0,
  maxLat: 54.8,
  minLng: 14.1,
  maxLng: 24.2
};

export function normalizeCoordinates(lat: number, lng: number) {
  // Convert lat/lng to percentage positions on the map
  const latPercent = ((lat - POLAND_BOUNDS.minLat) / (POLAND_BOUNDS.maxLat - POLAND_BOUNDS.minLat)) * 100;
  const lngPercent = ((lng - POLAND_BOUNDS.minLng) / (POLAND_BOUNDS.maxLng - POLAND_BOUNDS.minLng)) * 100;
  
  return {
    top: Math.max(0, Math.min(100, latPercent)),
    left: Math.max(0, Math.min(100, lngPercent))
  };
}
