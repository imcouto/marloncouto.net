import type { WeatherData } from '@/types/WeatherData.ts';
import { atom } from 'nanostores';

export const weatherStore = atom<WeatherData | null>(null);
