import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, Typography, AppBar, Toolbar, IconButton, CardMedia, CardContent } from '@mui/material';
import { ArrowBack, Logout as LogoutIcon, PlayArrow } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const VIDEOS = {
  1: [
    { 
      id: 1, 
      title: 'Action Movie 1', 
      thumbnail: 'https://picsum.photos/seed/action1/800/450',
      description: 'An exciting action-packed adventure'
    },
    { 
      id: 2, 
      title: 'Action Movie 2', 
      thumbnail: 'https://picsum.photos/seed/action2/800/450',
      description: 'Thrilling sequences and amazing stunts'
    },
  ],
  2: [
    { 
      id: 3, 
      title: 'Comedy Show 1', 
      thumbnail: 'https://picsum.photos/seed/comedy1/800/450',
      description: 'Laugh out loud moments'
    },
    { 
      id: 4, 
      title: 'Comedy Show 2', 
      thumbnail: 'https://picsum.photos/seed/comedy2/800/450',
      description: 'Hilarious entertainment for everyone'
    },
  ],
  3: [
    { 
      id: 5, 
      title: 'Tutorial 1', 
      thumbnail: 'https://picsum.photos/seed/edu1/800/450',
      description: 'Learn the basics step by step'
    },
    { 
      id: 6, 
      title: 'Tutorial 2', 
      thumbnail: 'https://picsum.photos/seed/edu2/800/450',
      description: 'Advanced concepts explained'
    },
  ],
};

export default function Videos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [page] = useState(1);

  const videos = VIDEOS[id as keyof typeof VIDEOS] || [];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Videos
          </Typography>
          <IconButton color="inherit" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {videos.map((video, index) => (
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={video.id}
              sx={{
                mb: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="450"
                  image={video.thumbnail}
                  alt={video.title}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <PlayArrow sx={{ fontSize: 64, color: 'white' }} />
                </Box>
              </Box>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
