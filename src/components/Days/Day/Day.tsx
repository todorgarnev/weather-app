import React, { FunctionComponent } from 'react';
import './Day.scss';

import Weather from '../../../shared/interfaces/weather';

interface DayProps {
  weatherData: Weather
}

const Day: FunctionComponent<DayProps> = (props: DayProps) => {
  const { weatherData } = props;

  return (
    <div className="day">
      <div className="side front">
        <div className="icon"></div>

        <div className="header">
          {weatherData.name}
        </div>

        <div className="details">
          {weatherData.weather.description}
          {weatherData.main.temp}
        </div>
      </div>

      <div className="side back">
        BACK
      </div>
    </div>
  );
}

export default Day;
