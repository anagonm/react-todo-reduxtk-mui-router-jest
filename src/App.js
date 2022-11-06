import * as React from 'react';
import AccountMenu from './components/AccountMenu';
import { Outlet } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

export default function App() {
  return (
    <>
      <AccountMenu />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align='center'>
            React skills test
          </Typography>
          <Typography align='center'>
            Testing applicants skills with react & node.js development
          </Typography>
        </Box>
        <Outlet />
      </Container>
    </>

  );
}
