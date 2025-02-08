export type WeatherData = {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  location: string;
};
