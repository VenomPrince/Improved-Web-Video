import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { ArrowBack, Logout as LogoutIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const VIDEOS = {
  1: [
    { id: 1, title: 'Action Movie 1', url: 'https://www.youtube.com/embed/example1' },
    { id: 2, title: 'Action Movie 2', url: 'https://www.youtube.com/embed/example2' },
  ],
  2: [
    { id: 3, title: 'Comedy Show 1', url: 'https://www.youtube.com/embed/example3' },
    { id: 4, title: 'Comedy Show 2', url: 'https://www.youtube.com/embed/example4' },
  ],
  3: [
    { id: 5, title: 'Tutorial 1', url: 'https://www.youtube.com/embed/example5' },
    { id: 6, title: 'Tutorial 2', url: 'https://www.youtube.com/embed/example6' },
  ],
};

export default function Videos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [page] = useState(1);

  const videos = VIDEOS[id as keyof typeof VIDEOS] || [];

  return (
    <Box>
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
          {videos.map((video) => (
            <Card key={video.id} sx={{ mb: 3, overflow: 'hidden' }}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src={video.url}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">{video.title}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}