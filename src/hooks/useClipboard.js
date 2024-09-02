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
exports.useClipboard = void 0;
const react_1 = require("react");
const useClipboard = () => {
    const [clipboardData, setClipboardData] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)(null);
    const copyToClipboard = (text) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield navigator.clipboard.writeText(text);
        }
        catch (err) {
            setError('Failed to copy text to clipboard');
        }
    });
    const readClipboard = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const text = yield navigator.clipboard.readText();
            setClipboardData(text);
        }
        catch (err) {
            setError('Failed to read from clipboard');
        }
    });
    return { clipboardData, copyToClipboard, readClipboard, error };
};
exports.useClipboard = useClipboard;
