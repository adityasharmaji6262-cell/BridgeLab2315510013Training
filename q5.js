// Q5 – Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log(secure ? "Secure" : "Unsafe");
