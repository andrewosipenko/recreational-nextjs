import { Box, Typography, Container, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.100',
        color: 'text.primary',
        py: 4,
        mt: 'auto',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Recreation Map Poland
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              © 2024 Andrzej. All rights reserved.
            </Typography>
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              NIP: 123-456-78-90
            </Typography>
            <Link
              href="mailto:contact@recreationmap.pl"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.9,
                '&:hover': {
                  opacity: 1,
                  textDecoration: 'underline',
                },
              }}
            >
              contact@recreationmap.pl
            </Link>
            <Link
              href="tel:+48123456789"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.9,
                '&:hover': {
                  opacity: 1,
                  textDecoration: 'underline',
                },
              }}
            >
              +48 123 456 789
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
