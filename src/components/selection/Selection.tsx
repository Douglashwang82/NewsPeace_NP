import React from 'react';
import { FC } from 'react';
import { ButtonGroup, Button, Grid } from '@material-ui/core';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const Selection: FC<{handleAgree: any}> = ({handleAgree}) => {
  const classes = useStyles();

  return <>
    <div className={classes.selection}>
      <ButtonGroup>
        <Grid container spacing={4}>

          <Grid item xs={5}>
            {/* <Button component = {Link} className={classes.selectionButtonNo} onClick={() => handleSetAgree(false)} to='/addComment'>No</Button> */}
            <Button variant="contained" className={classes.selectionButtonNo}>No</Button>
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item xs={5} >
            {/* <Button component = {Link} variant="contained" className={classes.selectionButtonYes} onClick={() => handleSetAgree(true)} to='/addComment'>Yes</Button> */}
            <Button variant="contained" className={classes.selectionButtonYes}>Yes</Button>
          </Grid>

        </Grid>

      </ButtonGroup>
    </div>
  </>
};

export default Selection;
