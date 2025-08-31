import { Box, Typography } from '@mui/material';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import HotelMap from '@/components/Map';

export default function Home() {
  return (
    <Box sx={{
      position: 'relative',
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      backgroundColor: 'background.default',
      width: '100%'
    }}>
      <Header />
      <Box component="main" sx={{
        flexGrow: 1,
        width: '100%',
        paddingTop: 'calc(var(--header-height) + 2rem)'
      }}>
        <Introduction />
        <Box sx={{
          // height: 'calc(100vh - var(--header-height) - 12rem)',
          height: '60vh',
          position: 'relative',
          width: '100%',
          px: 2,
          py: { xs: 3, sm: 4, lg: 5 }
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 2,
              textAlign: 'center',
            }}
          >
            Hotel map
          </Typography>
          <HotelMap />
        </Box>
      </Box>
    </Box>
  );
}
