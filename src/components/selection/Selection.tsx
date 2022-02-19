import React from 'react';
import { FC } from 'react';
import { ButtonGroup, Button} from '@material-ui/core';

const Selection: FC = () => {
  return <div>
    <ButtonGroup>
      <Button>Yes</Button>
      <Button>No</Button>
    </ButtonGroup>
  </div>;
};

export default Selection;
