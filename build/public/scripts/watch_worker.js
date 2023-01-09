"use strict";
var timeUpdateMs = 1000;
var limitSecondOrMinute = 60;
var limitHours = 24;
self.addEventListener("message", function (event) {
    var oldTime = event.data;
    setTimeout(function () {
        var newTime = addOneSecond(oldTime);
        postMessage(newTime);
    }, timeUpdateMs);
});
function addOneSecond(_a) {
    var hour = _a.hour, minute = _a.minute, second = _a.second;
    second++;
    if (second >= limitSecondOrMinute) {
        minute++;
        second = 0;
        if (minute >= limitSecondOrMinute) {
            hour++;
            minute = 0;
            if (hour >= limitHours) {
                hour = 0;
            }
        }
    }
    return {
        hour: hour,
        minute: minute,
        second: second
    };
}
