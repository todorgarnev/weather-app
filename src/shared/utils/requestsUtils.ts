import axios from 'axios';
import * as apiConstants from '../constants/apiConstants';

const getCityWeather = async (cityName: string) => {
  const res = await axios.get(`${apiConstants.cityWeatherUrl}${cityName}${apiConstants.appId}`);
  console.log(res.data);
}

export { getCityWeather };