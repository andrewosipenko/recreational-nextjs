'use client';

import { Card, CardContent, Typography, Box, Chip, Link } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import { Hotel } from '../utils/csvParser';

interface HotelCardProps {
  hotel: Hotel;
  onClose?: () => void;
}

export default function HotelCard({ hotel, onClose }: HotelCardProps) {
  // Add null check to prevent errors
  if (!hotel) {
    return null;
  }

  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: 4,
        borderRadius: 2,
        position: 'relative',
        '&:hover': {
          boxShadow: 6,
        }
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          <HotelIcon sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flex: 1 }}>
            {hotel.name || 'Unknown Hotel'}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ color: 'text.secondary', fontSize: '1rem', mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {hotel.latitude?.toFixed(4) || '0'}, {hotel.longitude?.toFixed(4) || '0'}
            </Typography>
          </Box>
          
          {hotel.website && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LanguageIcon sx={{ color: 'text.secondary', fontSize: '1rem', mr: 0.5 }} />
              <Link 
                href={hotel.website.startsWith('http') ? hotel.website : `https://${hotel.website}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{ textDecoration: 'none' }}
              >
                {hotel.website}
              </Link>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            label={`Forest Index: ${hotel.inForest?.toFixed(2) || '0.00'}`}
            size="small"
            color={hotel.inForest && hotel.inForest > 1 ? 'success' : hotel.inForest && hotel.inForest > 0.5 ? 'warning' : 'default'}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
} 