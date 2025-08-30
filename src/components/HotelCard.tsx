import { Box, Card, CardContent, Typography, Link, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

export default function HotelCard() {
  return (
    <Box sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      p: 2,
      zIndex: 20,
      width: '100%'
    }}>
      <Card sx={{
        maxWidth: { xs: '28rem', md: '32rem' },
        mx: 'auto',
        borderRadius: 4,
        boxShadow: 8,
        overflow: 'hidden',
        transform: 'transition: transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        width: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          <Box sx={{ flexShrink: 0 }}>
            <Image
              alt="Hotel Gołębiewski"
              src="https://lh3.googleusercontent.com/p/AF1QipM7lT6L8X4vFzJjY2B8U7G9D5K8L7H2A9R5F4W3=s1360-w1360-h1020"
              width={192}
              height={192}
              style={{
                height: '12rem',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <CardContent sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Chip
              label="Hotel"
              size="small"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 600,
                mb: 0.5,
                backgroundColor: 'primary.main',
                color: 'white',
                fontSize: '0.75rem'
              }}
            />
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 1.5,
                lineHeight: 1.2,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Hotel Gołębiewski
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 2,
                lineHeight: 1.6
              }}
            >
              Experience luxury and comfort in the heart of Poland. Perfect for both business and leisure travelers.
            </Typography>
            <Link
              href="#"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline',
                },
                transition: 'color 0.2s ease'
              }}
            >
              Odwiedź stronę
              <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
            </Link>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
} 