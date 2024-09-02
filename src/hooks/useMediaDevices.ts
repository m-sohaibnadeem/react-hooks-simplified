import { useEffect, useState } from 'react';

export const useMediaDevices = () => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateDevices = async () => {
      try {
        const devicesList = await navigator.mediaDevices.enumerateDevices();
        setDevices(devicesList);
      } catch (err) {
        setError('Failed to enumerate devices');
      }
    };

    navigator.mediaDevices.addEventListener('devicechange', updateDevices);

    updateDevices(); // Initial call to set state

    return () => {
      navigator.mediaDevices.removeEventListener('devicechange', updateDevices);
    };
  }, []);

  return { devices, error };
};
