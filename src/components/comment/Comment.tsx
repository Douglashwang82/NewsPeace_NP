import React from 'react';
import { FC } from 'react';

import { List, ListItemButton, ListItemText } from '@mui/material';
import {Card, Button} from 'react-bootstrap';
import useStyles from './styles';

const Comment: FC = () => {
  const classes = useStyles();
  return (<div>
    <Card 
    style={{ width: '600px',margin:"auto" , backgroundColor: "#121212", font:"serif", borderStyle:"solid", borderColor:"#a10529", borderWidth:"2px"}}
    text = {"light"}

    >
      <Card.Header></Card.Header>
      <Card.Body>
      <Card.Title>123</Card.Title>
      <Card.Text>
        <p className= {classes.p}>Ukraine said a fire had broken out at a complex containing Europe’s largest nuclear power plant after Russian soldiers fired on the area. Russian troops were gaining ground in critical parts of the south, threatening to cut off Ukraine from Black Sea ports.</p>
      </Card.Text>
      </Card.Body>

    </Card>

    <Card 
    style={{ width: '600px', margin:"auto" , backgroundColor: "#65E1FF" }}
    text = {"dark"}
    >
      <Card.Header></Card.Header>
      <Card.Body>
      <Card.Title>123</Card.Title>
      <Card.Text>
        <p>Ukraine said a fire had broken out at a complex containing Europe’s largest nuclear power plant after Russian soldiers fired on the area. Russian troops were gaining ground in critical parts of the south, threatening to cut off Ukraine from Black Sea ports.</p>
      </Card.Text>
      </Card.Body>

    </Card>
  </div>);
};

export default Comment;
