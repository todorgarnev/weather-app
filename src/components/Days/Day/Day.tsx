import React, { FunctionComponent } from 'react';
import './Day.scss';

import Weather from '../../../shared/interfaces/weather';
import * as apiConstants from '../../../shared/constants/apiConstants';

interface DayProps {
  weatherData: Weather
}

const Day: FunctionComponent<DayProps> = (props: DayProps) => {
  const { weatherData } = props;

  return (
    <div className="day">
      <div className="side front">
        <div className="icon"
          style={{ backgroundImage: `url(${apiConstants.weatherIconUrl}${weatherData.weather.icon}${apiConstants.weatherIconSize})` }}>
        </div>

        <div className="header">
          {weatherData.name}
        </div>

        <div className="details">
          <div className="current-temperature">{Math.round(weatherData.main.temp)}&#8451;</div>
          <div className="description">{weatherData.weather.description}</div>
          <div className="feels-like">
            Feels like: <span className="emphasize">{Math.round(weatherData.main.feels_like)}&deg;</span>
          </div>
          <div className="wind">
            Wind: <span className="emphasize">{weatherData.wind} m/s</span>
          </div>
        </div>
      </div>

      <div className="side back">
        BACK
      </div>
    </div>
  );
}

export default Day;
