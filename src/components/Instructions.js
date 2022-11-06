import React from "react";
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const Instructions = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="auto"
    >
      <Container style={{backgroundColor: '#f2f2f2', borderRadius: '8px', padding: '24px'}}>
        <Typography style={{marginBottom: '16px'}} variant='h5' component='h4'>Welcome to the Todo App</Typography>
        <Typography component='p' data-testid="description-text-1">
          This skills test is designed to allow you to showcase your development abilities to us. The test is administered through an online screen sharing session via zoom and will be recorded.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText>Candidates will have one hour to complete the exercise.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText>Google can be used to lookup helpful information as needed.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText>Do not worry if you cannot fully complete the test within the allotted time, the purpose of the test is to allow us to determine skills and to get an insight into how you go about solving the problem.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText>Do not worry if you cannot fully complete the test within the allotted time, the purpose of the test is to allow us to determine skills and to get an insight into how you go about solving the problem.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText>Please submit a live recording of the exercise.</ListItemText>
          </ListItem>
        </List>
      </Container>
    </Box>
  )
};

export default Instructions;