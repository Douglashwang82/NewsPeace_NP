import React from 'react';
import { FC } from 'react';
import { useInput } from '@mui/base';
import { styled } from '@mui/material';
import { TextareaAutosize, Box } from '@material-ui/core';

const AddCommentPage: FC = () => {
  return <div>
    <Box>
    <TextareaAutosize></TextareaAutosize>
    </Box>
  </div>;
};

export default AddCommentPage;
