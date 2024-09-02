"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIdle = void 0;
const react_1 = require("react");
const useIdle = (timeout = 3000) => {
    const [isIdle, setIsIdle] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        let timeoutId;
        const handleActivity = () => {
            setIsIdle(false);
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => setIsIdle(true), timeout);
        };
        document.addEventListener('mousemove', handleActivity);
        document.addEventListener('keydown', handleActivity);
        timeoutId = window.setTimeout(() => setIsIdle(true), timeout); // Initial call to set idle state
        return () => {
            document.removeEventListener('mousemove', handleActivity);
            document.removeEventListener('keydown', handleActivity);
            clearTimeout(timeoutId);
        };
    }, [timeout]);
    return isIdle;
};
exports.useIdle = useIdle;
