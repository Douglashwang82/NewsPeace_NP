import React from 'react';
import { FC } from 'react';
import { ButtonGroup, Button, Grid } from '@material-ui/core';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const SubmitSkip: FC<{handlePostComment: any}> = ({handlePostComment}) => {
  const classes = useStyles();

  return <>
    <div className={classes.submitSkip}>
        <Grid container justifyContent = "center" spacing={1}>

          <Grid item>
            <Button className = {classes.skipButton} onClick = {() => handlePostComment(false)}>Skip</Button>
          </Grid>

          <Grid item>
            <Button className = {classes.submitButton} onClick = {() => handlePostComment(true)}>Submit</Button>
          </Grid>

        </Grid>
    </div>
  </>
};

export default SubmitSkip;
