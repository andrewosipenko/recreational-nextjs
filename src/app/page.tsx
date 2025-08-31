import { Box } from '@mui/material';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Map from '@/components/Map';

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
          height: 'calc(100vh - var(--header-height) - 8rem)',
          position: 'relative',
          width: '100%',
          px: 2,
          py: { xs: 3, sm: 4, lg: 5 }
        }}>
          <Map />
        </Box>
      </Box>
    </Box>
  );
}
