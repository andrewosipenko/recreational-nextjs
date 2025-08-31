import { Box, Typography, Avatar, Paper } from '@mui/material';

export default function Introduction() {
  return (
    <Box sx={{ 
      width: '100%', 
      px: 2, 
      py: { xs: 3, sm: 4, lg: 5 } 
    }}>
      <Paper sx={{
        maxWidth: '64rem',
        mx: 'auto',
        elevation: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
        p: { xs: 3, sm: 4 }
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, sm: 3 }
        }}>
          <Box sx={{ flexShrink: 0 }}>
            <Avatar
              alt="Andrzej's photo"
              src="/author.jpg"
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
            Hej, my name is Andrzej,<br/>
            I like to travel in Poland and prepared a list of recreational places for myself but later on decided to share on the internet.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
} 