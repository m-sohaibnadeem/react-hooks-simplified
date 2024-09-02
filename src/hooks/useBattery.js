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
exports.useBattery = void 0;
const react_1 = require("react");
const useBattery = () => {
    const [battery, setBattery] = (0, react_1.useState)(null);
    const [charging, setCharging] = (0, react_1.useState)(false);
    const [level, setLevel] = (0, react_1.useState)(1);
    (0, react_1.useEffect)(() => {
        const getBatteryInfo = () => __awaiter(void 0, void 0, void 0, function* () {
            if ('getBattery' in navigator && typeof navigator.getBattery === 'function') {
                const battery = yield navigator.getBattery();
                setBattery(battery);
                setCharging(battery.charging);
                setLevel(battery.level);
                battery.onchargingchange = () => setCharging(battery.charging);
                battery.onlevelchange = () => setLevel(battery.level);
            }
            else {
                console.warn('Battery Status API is not supported in this browser.');
            }
        });
        getBatteryInfo();
    }, []);
    return { battery, charging, level };
};
exports.useBattery = useBattery;
