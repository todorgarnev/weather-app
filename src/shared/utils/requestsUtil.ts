import axios, { AxiosResponse } from 'axios';
import * as apiConstants from '../constants/apiConstants';

const getTodayCityWeather = async (cityName: string) => {
  try {
    const response: AxiosResponse = await axios.get(`${apiConstants.cityWeatherUrl}${cityName}${apiConstants.appId}`);
    return response.data;
  } catch (e) {
    return { error: true, message: 'No city found' }
  }
}

export { getTodayCityWeather };