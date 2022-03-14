import React from 'react';
import { FC } from 'react';
import { useInput } from '@mui/base';
import { styled } from '@mui/material';
import { TextareaAutosize, Box } from '@material-ui/core';
import SubmitSkip from '../submitSkip/SubmitSkip';
import useStyles from './styles';

const AddComment: FC<{handleUserComment: any}>= ({handleUserComment}) => {

  const classes = useStyles();

  return <div className= {classes.addComment}>
    <TextareaAutosize  aria-label="minimum height" placeholder="Put something in here.." minRows={10} maxRows = {10} className = {classes.textArea} onChange={handleUserComment}></TextareaAutosize>
  </div>;
};

export default AddComment;
