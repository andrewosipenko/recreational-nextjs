'use client';

import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { 
  Waves as SeaIcon, 
  Terrain as MountainsIcon, 
  LocationOn as NearbyIcon 
} from '@mui/icons-material';

export default function FeaturedDestinations() {
  return (
    <Box sx={{
      maxWidth: '64rem',
      px: 2,
      py: { xs: 4, sm: 5, lg: 6 },
      mx: 'auto',
      backgroundColor: 'background.default'
    }}>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 4,
          textAlign: 'center',
          fontWeight: 600
        }}
      >
        Featured Destinations
      </Typography>
      
      <Grid container spacing={2}>
        {/* Sea Section */}
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3
            }}>
              <Box sx={{ mb: 2 }}>
                <SeaIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
              
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: 'text.primary'
                }}
              >
                Sea
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: 'text.secondary',
                  flexGrow: 1,
                  lineHeight: 1.6
                }}
              >
                Handpicked locations near the sea for the perfect coastal getaway
              </Typography>
              
              <Button 
                variant="contained" 
                size="large"
                href="/destinations/sea"
                sx={{
                  mt: 'auto',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 4
                  }
                }}
              >
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Mountains Section */}
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3
            }}>
              <Box sx={{ mb: 2 }}>
                <MountainsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
              
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: 'text.primary'
                }}
              >
                Mountains
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: 'text.secondary',
                  flexGrow: 1,
                  lineHeight: 1.6
                }}
              >
                Breathtaking mountain retreats surrounded by pristine nature
              </Typography>
              
              <Button 
                variant="contained" 
                size="large"
                href="/destinations/mountains"
                sx={{
                  mt: 'auto',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 4
                  }
                }}
              >
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Nearby Section */}
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3
            }}>
              <Box sx={{ mb: 2 }}>
                <NearbyIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
              
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: 'text.primary'
                }}
              >
                Nearby
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: 'text.secondary',
                  flexGrow: 1,
                  lineHeight: 1.6
                }}
              >
                Convenient locations close to major attractions and cities
              </Typography>
              
              <Button 
                variant="contained" 
                size="large"
                href="/destinations/nearby"
                sx={{
                  mt: 'auto',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 4
                  }
                }}
              >
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}