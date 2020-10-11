import React, { FunctionComponent } from 'react';
import './Day.scss';

import Weather from '../../../shared/interfaces/weather';

interface DayProps {
  weather: Weather
}

const Day: FunctionComponent<DayProps> = (props: DayProps) => {
  const { weather } = props;

  return (
    <div className="day">
      <div className="side front">
        <div className="picture">&nbsp;</div>

        <div className="header">
          {weather.name}
        </div>

        <div className="details">
          {weather.weather.description}
          {weather.main.temp}
        </div>
      </div>

      <div className="side back">
        BACK
      </div>
    </div>
  );
}

export default Day;
