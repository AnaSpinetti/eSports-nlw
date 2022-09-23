"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinutes = void 0;
function convertHourStringToMinutes(hoursString) {
    const [hours, minutes] = hoursString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
}
exports.convertHourStringToMinutes = convertHourStringToMinutes;
