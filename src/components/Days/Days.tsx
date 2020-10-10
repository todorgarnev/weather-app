import React, { FunctionComponent } from 'react';
import './Days.scss';

import Day from './Day/Day';


const Days: FunctionComponent = () => {
  return (
    <div className="days">
      <Day />
      <Day />
    </div>
  );
}

export default Days;
