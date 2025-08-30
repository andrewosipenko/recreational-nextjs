import { Box, IconButton, Paper, Typography, Divider } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NearMeIcon from '@mui/icons-material/NearMe';

export default function Map() {
  return (
    <Box 
      sx={{
        height: '100%',
        width: '100%',
        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYZPgJZD-qulXe0l3X2rDqBU83tQS8cMg7DybSNB1RxidkFxFQ6eqD_J7u9xwYCgy6zPyhsu6IboEQ5KT2ZiXtvqCtDFIbEyLY1mRg8j8s1-uWg4A9xGnbBaesl-Yq69hokP7yJ6kHrnslWTz05555AK3s1_E5a4Ri2IKjUa04YDsDXepfsP-bVZe0IdaexN5LPraOpClrEaFONuSs3Ac4pzRW5IO02dLvqEQvgEFHu5LbwHuQB73ulj9179_F6z0dEYWZ4XRB5lU")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      
      {/* Main hotel marker (center) */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <IconButton
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              '& .marker-icon': {
                transform: 'scale(1.1)',
              },
              '& .marker-label': {
                opacity: 1,
              }
            }
          }}
        >
          <Box sx={{
            width: 48,
            height: 48,
            backgroundColor: '#dc2626',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 4,
            transform: 'transition: all 0.3s ease',
            border: '4px solid rgba(220, 38, 38, 0.3)',
            '&:hover': {
              border: '4px solid rgba(220, 38, 38, 0.5)',
            }
          }} className="marker-icon">
            <HotelIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
          </Box>
          <Paper
            sx={{
              mt: 1,
              px: 1.5,
              py: 0.5,
              borderRadius: '50px',
              boxShadow: 2,
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            className="marker-label"
          >
            <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.primary' }}>
              Hotel Gołębiewski
            </Typography>
          </Paper>
        </IconButton>
      </Box>

      {/* Secondary hotel marker (top-left) */}
      <Box sx={{
        position: 'absolute',
        top: '33.33%',
        left: '25%',
        transform: 'translate(-50%, -50%)'
      }}>
        <IconButton
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              '& .marker-icon': {
                transform: 'scale(1.1)',
              },
              '& .marker-label': {
                opacity: 1,
              }
            }
          }}
        >
          <Box sx={{
            width: 40,
            height: 40,
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 2,
            transform: 'transition: all 0.3s ease',
            '&:hover': {
              boxShadow: 4,
            }
          }} className="marker-icon">
            <HotelIcon sx={{ color: 'white', fontSize: '1.25rem' }} />
          </Box>
          <Paper
            sx={{
              mt: 1,
              px: 1.5,
              py: 0.5,
              borderRadius: '50px',
              boxShadow: 2,
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            className="marker-label"
          >
            <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.primary' }}>
              Hotel B
            </Typography>
          </Paper>
        </IconButton>
      </Box>

      {/* Secondary hotel marker (bottom-right) */}
      <Box sx={{
        position: 'absolute',
        top: '66.67%',
        left: '75%',
        transform: 'translate(-50%, -50%)'
      }}>
        <IconButton
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              '& .marker-icon': {
                transform: 'scale(1.1)',
              },
              '& .marker-label': {
                opacity: 1,
              }
            }
          }}
        >
          <Box sx={{
            width: 40,
            height: 40,
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 2,
            transform: 'transition: all 0.3s ease',
            '&:hover': {
              boxShadow: 4,
            }
          }} className="marker-icon">
            <HotelIcon sx={{ color: 'white', fontSize: '1.25rem' }} />
          </Box>
          <Paper
            sx={{
              mt: 1,
              px: 1.5,
              py: 0.5,
              borderRadius: '50px',
              boxShadow: 2,
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            className="marker-label"
          >
            <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.primary' }}>
              Hotel C
            </Typography>
          </Paper>
        </IconButton>
      </Box>

      {/* Zoom controls */}
      <Box sx={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        zIndex: 10
      }}>
        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          boxShadow: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(4px)',
          overflow: 'hidden'
        }}>
          <IconButton
            sx={{
              p: 1.5,
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&:focus': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            <AddIcon sx={{ fontSize: '1.25rem' }} />
          </IconButton>
          <Divider />
          <IconButton
            sx={{
              p: 1.5,
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&:focus': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            <RemoveIcon sx={{ fontSize: '1.25rem' }} />
          </IconButton>
        </Paper>
        <IconButton
          sx={{
            p: 1.5,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(4px)',
            borderRadius: 3,
            boxShadow: 2,
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            '&:focus': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            }
          }}
        >
          <NearMeIcon sx={{ fontSize: '1.25rem' }} />
        </IconButton>
      </Box>
    </Box>
  );
} 