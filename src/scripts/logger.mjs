import {CONSTANTS} from "./constants.mjs";

export function log(...args) {
    if (!CONSTANTS.debug) return;
    console.log(CONSTANTS.moduleName, '|DOCG|', ...args);
}

export function logError(msg, sticky) {
    ui.notifications.error(msg.toString(), {
        sticky,
        console: true,
    });
}