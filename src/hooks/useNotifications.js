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
exports.useNotifications = void 0;
const react_1 = require("react");
const useNotifications = () => {
    const [permission, setPermission] = (0, react_1.useState)(Notification.permission);
    const requestPermission = () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield Notification.requestPermission();
        setPermission(result);
    });
    const showNotification = (title, options) => {
        if (permission === 'granted') {
            new Notification(title, options);
        }
    };
    return { permission, requestPermission, showNotification };
};
exports.useNotifications = useNotifications;
