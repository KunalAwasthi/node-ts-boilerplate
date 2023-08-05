"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const logger_1 = __importDefault(require("./config/logger"));
const port = 8080;
app_1.default.listen(port, () => {
    logger_1.default.info(`[Server]: running at https://localhost:${port}`);
});
