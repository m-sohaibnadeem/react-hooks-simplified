"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFullscreen = void 0;
const react_1 = require("react");
const useFullscreen = (elementRef) => {
    const [isFullscreen, setIsFullscreen] = (0, react_1.useState)(false);
    const enterFullscreen = (0, react_1.useCallback)(() => {
        if (elementRef.current && elementRef.current.requestFullscreen) {
            elementRef.current.requestFullscreen();
            setIsFullscreen(true);
        }
    }, [elementRef]);
    const exitFullscreen = (0, react_1.useCallback)(() => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);
    return { isFullscreen, enterFullscreen, exitFullscreen };
};
exports.useFullscreen = useFullscreen;
