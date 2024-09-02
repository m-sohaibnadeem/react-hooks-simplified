import { useEffect, useState } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy: number;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
}

export const useGeolocation = () => {
  const [position, setPosition] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const success = (pos: GeolocationPosition) => {
      setPosition(pos.coords);
    };

    const failure = (err: GeolocationPositionError) => {
      setError(err.message);
    };

    const watchId = navigator.geolocation.watchPosition(success, failure);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { position, error };
};
