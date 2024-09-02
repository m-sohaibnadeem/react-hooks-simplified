"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
const react_1 = require("react");
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.error(error);
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            console.error(error);
        }
    };
    return [storedValue, setValue];
};
exports.useLocalStorage = useLocalStorage;
