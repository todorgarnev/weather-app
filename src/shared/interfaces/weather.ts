export default interface Weather {
  name: string;
  weather: {
    description: string,
    icon: string,
    main: string
  };
  main: {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
  };
  clouds: number;
  wind: number;
  sunrise: number;
  sunset: number
}