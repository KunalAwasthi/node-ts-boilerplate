"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Db {
    static connect(options) {
        mongoose_1.default.connect(`mongodb://${options.user}:${options.pass}@${options.host}:${options.port}/${options.db}?authSource=admin`)
            .then(() => console.log('DB Connected!'))
            .catch((e) => console.log('DB Error', e));
    }
    static getDbOptions() {
        return {
            user: process.env.MONGO_USER,
            host: process.env.MONGO_HOST,
            db: process.env.MONGO_DB_NAME,
            pass: process.env.MONGO_PASSWORD,
            port: 27017
        };
    }
}
exports.default = Db;
