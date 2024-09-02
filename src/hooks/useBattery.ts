import { useEffect, useState } from 'react';
interface Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

declare global {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}


interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: EventListenerOrEventListenerObject | null;
  onlevelchange: EventListenerOrEventListenerObject | null;
  onchargingtimechange: EventListenerOrEventListenerObject | null;
  ondischargingtimechange: EventListenerOrEventListenerObject | null;
}

export const useBattery = () => {
  const [battery, setBattery] = useState<BatteryManager | null>(null);
  const [charging, setCharging] = useState(false);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const getBatteryInfo = async () => {
      if ('getBattery' in navigator && typeof navigator.getBattery === 'function') {
        const battery = await navigator.getBattery!(); 
        setBattery(battery);
        setCharging(battery.charging);
        setLevel(battery.level);

        battery.onchargingchange = () => setCharging(battery.charging);
        battery.onlevelchange = () => setLevel(battery.level);
      } else {
        console.warn('Battery Status API is not supported in this browser.');
      }
    };

    getBatteryInfo();
  }, []);

  return { battery, charging, level };
};
