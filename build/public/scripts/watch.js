"use strict";
var Watch = /** @class */ (function () {
    function Watch(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.worker = new Worker("/scripts/watch_worker.js");
        this.initWorker();
    }
    Watch.prototype.initWorker = function () {
        var _this = this;
        var dataObject = {
            "hour": this.hour,
            "minute": this.minute,
            "second": this.second,
        };
        this.worker.postMessage(dataObject);
        this.worker.addEventListener("message", function (event) {
            var newTime = event.data;
            _this.setTime(newTime);
            _this.worker.postMessage(newTime);
            if (_this.onAddSecond) {
                _this.onAddSecond(newTime);
            }
        });
    };
    Watch.prototype.setOnAddSecond = function (callback) {
        this.onAddSecond = callback;
    };
    Watch.prototype.setTime = function (_a) {
        var hour = _a.hour, minute = _a.minute, second = _a.second;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    };
    return Watch;
}());
