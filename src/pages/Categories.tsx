import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Card, CardContent, Typography, IconButton, AppBar, Toolbar } from '@mui/material';
import { Logout as LogoutIcon, Movie } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const CATEGORIES = [
  { id: 1, title: 'Action', description: 'Action-packed videos' },
  { id: 2, title: 'Comedy', description: 'Funny and entertaining' },
  { id: 3, title: 'Education', description: 'Learning materials' },
];

export default function Categories() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [page] = useState(1);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Video Gallery
          </Typography>
          <IconButton color="inherit" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Categories
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {CATEGORIES.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
                onClick={() => navigate(`/category/${category.id}`)}
              >
                <CardContent>
                  <Movie sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}