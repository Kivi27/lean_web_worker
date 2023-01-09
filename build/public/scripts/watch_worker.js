"use strict";
self.addEventListener("message", function (event) {
    var oldTime = event.data;
    setTimeout(function () {
        var newTime = addOneSecond(oldTime);
        postMessage(newTime);
    }, 1000);
});
function addOneSecond(_a) {
    var hour = _a.hour, minute = _a.minute, second = _a.second;
    second++;
    if (second >= 60) {
        minute++;
        second = 0;
        if (minute >= 60) {
            hour++;
            minute = 0;
            if (hour >= 24) {
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
