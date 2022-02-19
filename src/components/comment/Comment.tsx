import React from 'react';
import { FC } from 'react';

import { List, ListItemButton, ListItemText } from '@mui/material';



const Comment: FC = () => {
  return (<div>
    <List>
      <ListItemButton>
        <ListItemText>
          First
        </ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemText>
          Second
        </ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemText>
          Third
        </ListItemText>
      </ListItemButton>
    </List>
  </div>);
};

export default Comment;
