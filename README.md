```markdown
# React Browser Hooks 📦

A collection of React hooks for interacting with various browser APIs. This library simplifies the use of modern browser features in your React applications by providing easy-to-use hooks.

## Installation

You can install the package via npm:

```bash
npm install react-browser-hooks
```

## Available Hooks

- [`useBattery`](#usebattery)
- [`useGeolocation`](#usegeolocation)
- [`useClipboard`](#useclipboard)
- [`useNetwork`](#usenetwork)
- [`useMediaDevices`](#usemediadevices)
- [`useFullscreen`](#usefullscreen)
- [`useSpeechSynthesis`](#usespeechsynthesis)
- [`useLocalStorage`](#uselocalstorage)
- [`useIntersectionObserver`](#useintersectionobserver)
- [`useIdle`](#useidle)
- [`useNotifications`](#usenotifications)
- [`useWindowSize`](#usewindowsize)
- [`useDarkMode`](#usedarkmode)
- [`useMediaQuery`](#usemediaquery)

## `useBattery` Hook

The `useBattery` hook provides information about the battery status of the device.

### Example

```jsx
import { useBattery } from 'react-browser-hooks';

const BatteryStatus = () => {
  const { battery, charging, level } = useBattery();

  return (
    <div>
      <p>Battery Level: {level * 100}%</p>
      <p>Charging: {charging ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

## `useGeolocation` Hook

The `useGeolocation` hook provides information about the user's geographical location.

### Example

```jsx
import { useGeolocation } from 'react-browser-hooks';

const LocationDisplay = () => {
  const { position, error } = useGeolocation();

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {position ? (
        <p>
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};
```

## `useClipboard` Hook

The `useClipboard` hook provides methods for interacting with the clipboard.

### Example

```jsx
import { useClipboard } from 'react-browser-hooks';

const ClipboardComponent = () => {
  const { clipboardData, copyToClipboard, readClipboard, error } = useClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard('Hello, World!')}>Copy to Clipboard</button>
      <button onClick={readClipboard}>Read from Clipboard</button>
      {error && <p>Error: {error}</p>}
      {clipboardData && <p>Clipboard Data: {clipboardData}</p>}
    </div>
  );
};
```

## `useNetwork` Hook

The `useNetwork` hook provides information about the network status of the browser.

### Example

```jsx
import { useNetwork } from 'react-browser-hooks';

const NetworkStatus = () => {
  const { networkInfo, isOnline } = useNetwork();

  return (
    <div>
      <p>Online: {isOnline ? 'Yes' : 'No'}</p>
      {networkInfo && (
        <div>
          <p>Effective Connection Type: {networkInfo.effectiveType}</p>
          <p>Downlink: {networkInfo.downlink} Mbps</p>
        </div>
      )}
    </div>
  );
};
```

## `useMediaDevices` Hook

The `useMediaDevices` hook provides access to the media devices available on the user's device.

### Example

```jsx
import { useMediaDevices } from 'react-browser-hooks';

const MediaDevicesList = () => {
  const { devices, error } = useMediaDevices();

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {devices.map((device) => (
          <li key={device.deviceId}>{device.label}</li>
        ))}
      </ul>
    </div>
  );
};
```

## `useFullscreen` Hook

The `useFullscreen` hook provides methods for handling fullscreen mode.

### Example

```jsx
import { useFullscreen } from 'react-browser-hooks';
import { useRef } from 'react';

const FullscreenComponent = () => {
  const ref = useRef(null);
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen(ref);

  return (
    <div>
      <div ref={ref}>
        <p>Content to display in fullscreen</p>
      </div>
      <button onClick={isFullscreen ? exitFullscreen : enterFullscreen}>
        {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </button>
    </div>
  );
};
```

## `useSpeechSynthesis` Hook

The `useSpeechSynthesis` hook provides methods for controlling the speech synthesis API.

### Example

```jsx
import { useSpeechSynthesis } from 'react-browser-hooks';

const SpeakButton = () => {
  const { speak, cancel, speaking } = useSpeechSynthesis();

  return (
    <div>
      <button onClick={() => speak('Hello, World!')}>
        Speak
      </button>
      <button onClick={cancel} disabled={!speaking}>
        Stop Speaking
      </button>
    </div>
  );
};
```

## `useLocalStorage` Hook

The `useLocalStorage` hook provides a way to interact with the browser's local storage.

### Example

```jsx
import { useLocalStorage } from 'react-browser-hooks';

const NameSaver = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Stored Name: {name}</p>
    </div>
  );
};
```
```

