"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = void 0;
const react_1 = require("react");
const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
    (0, react_1.useEffect)(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    return { isDarkMode, toggleDarkMode };
};
exports.useDarkMode = useDarkMode;
