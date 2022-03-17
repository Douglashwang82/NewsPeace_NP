import React, {useState} from 'react';
import { FC } from 'react';

import { List, ListItemButton, ListItemText, Avatar, Grid} from '@mui/material';
import {Card, Button} from 'react-bootstrap';
import useStyles from './styles';
import { mockComponent } from 'react-dom/test-utils';
import {Trail, animated, useTrail, a} from 'react-spring';
import ComponentCard from "./CommentCard";



const Comment: FC<{userComment: string[]}> = ({userComment}) => {
  const classes = useStyles();
  const [open, SetOpen] = useState(true);
  // trail
  const trail = useTrail(userComment.length, {
    config: { mass: 10, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 140 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  const handleOpen = () => {SetOpen(!open)}
  return (<div>
        {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={classes.trailsText} style={style}>
          <a.div style={{ height }}><ComponentCard data = {userComment[index]}/></a.div>
        </a.div>
      ))}
  </div>);
};

export default Comment;
