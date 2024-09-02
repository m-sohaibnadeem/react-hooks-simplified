import { useEffect, useState } from 'react';

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}
interface NetworkInformation extends EventTarget {
  downlink: number;
  effectiveType: string;
  rtt: number;
  saveData: boolean;
  type: string;
}

export const useNetwork = () => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInformation | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateNetworkInfo = () => {
      setIsOnline(navigator.onLine);
      const connection = (navigator as NavigatorWithConnection).connection;
      if (connection) {
        setNetworkInfo(connection);
      }
    };

    window.addEventListener('online', updateNetworkInfo);
    window.addEventListener('offline', updateNetworkInfo);

    const connection = (navigator as NavigatorWithConnection).connection;
    connection?.addEventListener('change', updateNetworkInfo);

    updateNetworkInfo(); 

    return () => {
      window.removeEventListener('online', updateNetworkInfo);
      window.removeEventListener('offline', updateNetworkInfo);
      connection?.removeEventListener('change', updateNetworkInfo);
    };
  }, []);

  return { networkInfo, isOnline };
};
