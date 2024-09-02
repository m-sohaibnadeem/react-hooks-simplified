```markdown
# React Browser Hooks 📦

A collection of React hooks for interacting with various browser APIs. This library simplifies the use of modern browser features in your React applications by providing easy-to-use hooks.

## Installation

You can install the package via npm:

```bash
npm install react-hooks-simplified

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
import { useBattery } from 'react-hooks-simplified';

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
import { useGeolocation } from 'react-hooks-simplified';

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
import { useClipboard } from 'react-hooks-simplified';

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
import { useNetwork } from 'react-hooks-simplified';

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
import { useMediaDevices } from 'react-hooks-simplified';

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
import { useFullscreen } from 'react-hooks-simplified';
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
import { useSpeechSynthesis } from 'react-hooks-simplified';

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
import { useLocalStorage } from 'react-hooks-simplified';

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

## `useIntersectionObserver` Hook

The `useIntersectionObserver` hook provides information about the visibility of an element.

### Example

```jsx
import { useRef } from 'react';
import { useIntersectionObserver } from 'react-hooks-simplified';

const IntersectionComponent = () => {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <div ref={ref}>
      <p>{isIntersecting ? 'In view' : 'Out of view'}</p>
    </div>
  );
};
```

## `useIdle` Hook

The `useIdle` hook determines if the user is idle or active.

### Example

```jsx
import { useIdle } from 'react-hooks-simplified';

const IdleComponent = () => {
  const isIdle = useIdle(5000); // User is idle after 5 seconds of inactivity

  return <p>{isIdle ? 'User is idle' : 'User is active'}</p>;
};
```

## `useNotifications` Hook

The `useNotifications` hook provides methods for showing notifications and requesting permission.

### Example

```jsx
import { useNotifications } from 'react-hooks-simplified';

const NotificationsComponent = () => {
  const { permission, requestPermission, showNotification } = useNotifications();

  return (
    <div>
      <button onClick={requestPermission}>
        Request Notification Permission
      </button>
      <button
        onClick={() => showNotification('Hello!', { body: 'This is a notification.' })}
        disabled={permission !== 'granted'}
      >
        Show Notification
      </button>
    </div>
  );
};
```

## `useWindowSize` Hook

The `useWindowSize` hook provides information about the current window size.

### Example

```jsx
import { useWindowSize } from 'react-hooks-simplified';

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};
```

## `useDarkMode` Hook

The `useDarkMode` hook provides methods for toggling between dark and light mode.

### Example

```jsx
import { useDarkMode } from 'react-hooks-simplified';

const DarkModeComponent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};
```

## `useMediaQuery` Hook

The `useMediaQuery` hook provides a way to detect media query matches.

### Example

```jsx
import { useMediaQuery } from 'react-hooks-simplified';

const MediaQueryComponent = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return <p>{isLargeScreen ? 'Large screen' : 'Small screen'}</p>;
};
```
```

