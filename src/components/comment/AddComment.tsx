import React from 'react';
import { FC } from 'react';
import { useInput } from '@mui/base';
import { styled } from '@mui/material';
import { FormControl, Box, OutlinedInput} from '@material-ui/core';


const AddCoomment: FC = () => {
  return <div>
    <Box>
      <FormControl>
        <OutlinedInput placeholder= "Plese enter text"></OutlinedInput>
      </FormControl>
    </Box>
  </div>;
};

export default AddCoomment;
