"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGeolocation = void 0;
const react_1 = require("react");
const useGeolocation = () => {
    const [position, setPosition] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }
        const success = (pos) => {
            setPosition(pos.coords);
        };
        const failure = (err) => {
            setError(err.message);
        };
        const watchId = navigator.geolocation.watchPosition(success, failure);
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return { position, error };
};
exports.useGeolocation = useGeolocation;
