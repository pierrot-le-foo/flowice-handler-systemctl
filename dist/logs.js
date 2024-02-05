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
exports.logs = void 0;
const child_process_1 = require("child_process");
const util_1 = require("util");
function logs(service, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = [
            "journalctl",
            "-u",
            service.options.serviceName,
            "-n",
            (options.limit || 100).toString(),
        ];
        if (options.last) {
            command.push("-r");
        }
        else if (options.since) {
            command.push("-S", options.since instanceof Date
                ? options.since.toISOString()
                : options.since);
        }
        else if (options.until) {
            command.push("-U", options.until instanceof Date
                ? options.until.toISOString()
                : options.until);
        }
        const { stdout } = yield (0, util_1.promisify)(child_process_1.exec)(command.join(" "));
        return stdout;
    });
}
exports.logs = logs;
//# sourceMappingURL=logs.js.map