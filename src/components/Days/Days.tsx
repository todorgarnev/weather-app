import React, { FunctionComponent } from 'react';
import './Days.module.scss';

import Day from './Day/Day';


const Days: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Day />
      <Day />
    </React.Fragment>
  );
}

export default Days;
