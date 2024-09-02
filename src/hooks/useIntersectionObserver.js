"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersectionObserver = void 0;
const react_1 = require("react");
const useIntersectionObserver = (elementRef, options) => {
    const [isIntersecting, setIsIntersecting] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!elementRef.current)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);
        observer.observe(elementRef.current);
        return () => {
            observer.disconnect();
        };
    }, [elementRef, options]);
    return isIntersecting;
};
exports.useIntersectionObserver = useIntersectionObserver;
