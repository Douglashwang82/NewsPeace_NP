import React from 'react';
import { FC } from 'react';
import { ButtonGroup, Button, Grid } from '@material-ui/core';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const Selection: FC<{handleAgree: any}> = ({handleAgree}) => {
  const classes = useStyles();

  return <>
    <div className={classes.selection}>
        <Grid container justifyContent='center' spacing = {1}>
          <Grid item>
            <Button variant="outlined" className={classes.selectionButtonNo} onClick = {(e) => handleAgree(false)}>Disagree</Button>
          </Grid>

          <Grid item>
            <Button variant="contained" className={classes.selectionButtonYes} onClick = {(e) =>handleAgree(true)}>Agree</Button>
          </Grid>

        </Grid>
    </div>
  </>
};

export default Selection;
