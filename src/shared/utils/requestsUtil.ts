import axios, { AxiosResponse } from 'axios';
import * as apiConstants from '../constants/apiConstants';

const getTodayCityWeather = async (cityName: string) => {
  const response: AxiosResponse = await axios.get(`${apiConstants.cityWeatherUrl}${cityName}${apiConstants.appId}`);
  return response.data;
}

export { getTodayCityWeather };