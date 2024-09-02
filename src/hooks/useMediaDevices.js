"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaDevices = void 0;
const react_1 = require("react");
const useMediaDevices = () => {
    const [devices, setDevices] = (0, react_1.useState)([]);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const updateDevices = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const devicesList = yield navigator.mediaDevices.enumerateDevices();
                setDevices(devicesList);
            }
            catch (err) {
                setError('Failed to enumerate devices');
            }
        });
        navigator.mediaDevices.addEventListener('devicechange', updateDevices);
        updateDevices(); // Initial call to set state
        return () => {
            navigator.mediaDevices.removeEventListener('devicechange', updateDevices);
        };
    }, []);
    return { devices, error };
};
exports.useMediaDevices = useMediaDevices;
