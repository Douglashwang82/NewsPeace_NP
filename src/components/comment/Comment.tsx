import React from 'react';
import { FC } from 'react';

import { List, ListItemButton, ListItemText, Avatar, Grid} from '@mui/material';
import {Card, Button} from 'react-bootstrap';
import useStyles from './styles';
import { mockComponent } from 'react-dom/test-utils';

const Comment: FC<{userComment: string[]}> = ({userComment}) => {
  const classes = useStyles();
  return (<div>
    {userComment.map((e) => (
          <Card 
          style={{ width: '600px', margin:"auto" , backgroundColor: "#121212", borderStyle:"solid", borderColor:"#1d2d33", borderWidth:"2px"}}
          text = {"light"}
          >
            <Card.Header></Card.Header>
            <Card.Body>
            <Card.Title as = {Grid} container>
                <Grid item><Avatar></Avatar></Grid>
                <Grid item><p>MockUser</p></Grid>
              </Card.Title>
            <Card.Text>
              <p className = {classes.p}>{e}</p>
            </Card.Text>
            </Card.Body>
      
          </Card>
    ))};
  </div>);
};

export default Comment;
