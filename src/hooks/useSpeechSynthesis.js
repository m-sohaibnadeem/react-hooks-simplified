"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpeechSynthesis = void 0;
const react_1 = require("react");
const useSpeechSynthesis = () => {
    const [speaking, setSpeaking] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const speak = (0, react_1.useCallback)((text, options) => {
        if (!window.speechSynthesis) {
            setError('SpeechSynthesis is not supported in this browser');
            return;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        Object.assign(utterance, options);
        utterance.onstart = () => setSpeaking(true);
        utterance.onend = () => setSpeaking(false);
        utterance.onerror = (e) => setError(e.error);
        window.speechSynthesis.speak(utterance);
    }, []);
    const cancel = (0, react_1.useCallback)(() => {
        window.speechSynthesis.cancel();
        setSpeaking(false);
    }, []);
    return { speaking, error, speak, cancel };
};
exports.useSpeechSynthesis = useSpeechSynthesis;
