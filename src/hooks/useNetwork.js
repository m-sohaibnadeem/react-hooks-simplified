"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNetwork = void 0;
const react_1 = require("react");
const useNetwork = () => {
    const [networkInfo, setNetworkInfo] = (0, react_1.useState)(null);
    const [isOnline, setIsOnline] = (0, react_1.useState)(navigator.onLine);
    (0, react_1.useEffect)(() => {
        const updateNetworkInfo = () => {
            setIsOnline(navigator.onLine);
            const connection = navigator.connection;
            if (connection) {
                setNetworkInfo(connection);
            }
        };
        window.addEventListener('online', updateNetworkInfo);
        window.addEventListener('offline', updateNetworkInfo);
        const connection = navigator.connection;
        connection === null || connection === void 0 ? void 0 : connection.addEventListener('change', updateNetworkInfo);
        updateNetworkInfo();
        return () => {
            window.removeEventListener('online', updateNetworkInfo);
            window.removeEventListener('offline', updateNetworkInfo);
            connection === null || connection === void 0 ? void 0 : connection.removeEventListener('change', updateNetworkInfo);
        };
    }, []);
    return { networkInfo, isOnline };
};
exports.useNetwork = useNetwork;
