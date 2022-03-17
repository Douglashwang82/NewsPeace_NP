import { FC } from 'react'
import { List, ListItemButton, ListItemText, Avatar, Grid} from '@mui/material';
import {Card, Button} from 'react-bootstrap';
import useStyles from './styles';
const CommentCard: FC<{ data: string}> = ({ data }) => {
    const classes = useStyles();

    return (
<div>
<Card 
          className = {classes.aCard}
          text = {"light"}
          >
            <Card.Header></Card.Header>
            <Card.Body>
            <Card.Title as = {Grid} container>
                <Grid item><Avatar></Avatar></Grid>
                <Grid item><p>MockUser</p></Grid>
              </Card.Title>
            <Card.Text>
              <p className = {classes.p}>{data}</p>
            </Card.Text>
            </Card.Body>
      
          </Card>
</div>
)
};

export default CommentCard 