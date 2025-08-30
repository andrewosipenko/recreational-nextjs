import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
        height: 'var(--header-height, 80px)',
        zIndex: 30
      }}
    >
      <Toolbar sx={{ height: '100%', px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 } }}>
          <IconButton
            sx={{
              p: 1,
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&:focus': {
                outline: 'none',
                boxShadow: '0 0 0 2px rgba(61, 153, 245, 0.2)',
              }
            }}
          >
            <MenuIcon sx={{ color: 'text.secondary', fontSize: '1.25rem' }} />
          </IconButton>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              letterSpacing: '-0.025em',
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            Recreational
          </Typography>
        </Box>
        
        {/* Add a placeholder for potential future navigation items */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Future navigation items can go here */}
        </Box>
      </Toolbar>
    </AppBar>
  );
} 