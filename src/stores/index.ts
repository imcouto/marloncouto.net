import { atom } from 'nanostores';

export const geolocation = atom<{ latitude: number; longitude: number } | null>(
  null,
);
