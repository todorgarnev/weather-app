import React, { useState } from 'react';
import './App.scss';

import Day from './components/Day/Day';
import Weather from './shared/interfaces/weather';
import * as requestsUtil from './shared/utils/requestsUtil';

const App = () => {
  const [cityName, setCityName] = useState<string>('');
  const [cityWeather, setCityWeather] = useState<Weather | null>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getCityWeather = async () => {
    setLoading(true);

    const data: any = await requestsUtil.getTodayCityWeather(cityName);

    if (data.error) {
      setError(data.message);
      setCityWeather(null);
      setLoading(false);
    } else {
      setCityWeather({
        name: data.name,
        weather: {
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          main: data.weather[0].main
        },
        main: {
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min
        },
        clouds: data.clouds.all,
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      });
      setError('');
      setLoading(false);
    }
  }

  return (
    <div className='app'>
      <div className='header'>
        <div className="search-section">
          <input type='text'
            className='search-bar'
            value={cityName}
            placeholder='Name'
            onChange={(e) => setCityName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && getCityWeather()}
          />
          <span className='name-placeholder'></span>
        </div>

        <button className='search-button' onClick={getCityWeather} disabled={cityName === ''}>Search</button>
      </div>

      {
        loading ?
          <div className='loader'></div> :
          <div className='main'>
            {cityWeather ? <Day weatherData={cityWeather} /> : <div className='error'>{error}</div>}
          </div>
      }
    </div>
  );
}

export default App;
