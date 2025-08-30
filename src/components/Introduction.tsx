import { Box, Typography, Avatar } from '@mui/material';

export default function Introduction() {
  return (
    <Box sx={{ 
      width: '100%', 
      px: 2, 
      py: { xs: 3, sm: 4, lg: 5 } 
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 2, sm: 3 },
        maxWidth: '64rem',
        mx: 'auto'
      }}>
        <Box sx={{ flexShrink: 0 }}>
          <Avatar
            alt="Andrzej's photo"
            src="https://lh3.googleusercontent.com/pw/AP1GczPrvN9hBkdS_P2Fz1mJ3t8bC5Yp2oG3i2C1g9g1n7i3o_fJz2v2b3h4qR9bB0v5s6f7a8c9e0d1b2a3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z"
            sx={{
              width: { xs: 64, sm: 80 },
              height: { xs: 64, sm: 80 },
              boxShadow: 3,
              border: '2px solid white'
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.125rem' },
            color: 'text.secondary',
            lineHeight: 1.6,
            textAlign: { xs: 'center', sm: 'left' },
            maxWidth: '32rem'
          }}
        >
          Hej, my name is Andrzej, I like to travel in Poland and prepared a list of recreational places for myself but later on decided to share on the internet.
        </Typography>
      </Box>
    </Box>
  );
} 