import type { WeatherData } from '@/types/WeatherData.ts';
import { atom } from 'nanostores';

export const weatherData = atom<WeatherData | null>(null);
