import React, { FunctionComponent } from 'react';
import './Day.scss';

const Day: FunctionComponent = () => {
  return (
    <div className="day">
      <div className="side front">
        <div className="picture">&nbsp;</div>

        <div className="header">
          HEADER
       </div>

        <div className="details">
          DETAILS
       </div>
      </div>

      <div className="side back">
        BACK
      </div>
    </div>
  );
}

export default Day;
