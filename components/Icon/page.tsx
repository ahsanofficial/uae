import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { MessageOutlined, CameraAltOutlined } from '@mui/icons-material';

const HomeScreen: React.FC = () => {
  const apps = [
    { name: 'Messaging', icon: <MessageOutlined /> },
    { name: 'Camera', icon: <CameraAltOutlined /> },
    // Add more apps here
  ];

  const gridItemStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h4" fontWeight="bold" mb={4}>
        What's New
      </Typography>
      <Grid container spacing={2}>
        {apps.map((app, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} style={gridItemStyles}>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              {app.icon}
              <Typography variant="body1" textAlign="right" mt={2}>
                {app.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeScreen;