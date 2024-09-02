"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
const react_1 = require("react");
const useMediaQuery = (query) => {
    const [matches, setMatches] = (0, react_1.useState)(() => window.matchMedia(query).matches);
    (0, react_1.useEffect)(() => {
        const mediaQuery = window.matchMedia(query);
        const handleChange = (e) => setMatches(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);
    return matches;
};
exports.useMediaQuery = useMediaQuery;
