import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';

export default function AccountMenu() {
  return (
    <Tabs centered style={{ backgroundColor: '#f2f2f2'}}>
      <Tab label="Instructions" component={RouterLink} to="/instructions" data-testid="link_home" value={false} />
      <Tab label="Todos" component={RouterLink} to={'/todo'} data-testid="link_todo_new" value={false} />
    </Tabs>
  );
}
