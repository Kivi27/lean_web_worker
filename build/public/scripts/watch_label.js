"use strict";
var WatchLabel = /** @class */ (function () {
    function WatchLabel(watch, hourLabel, minuteLabel, secondLabel) {
        var _this = this;
        this.hourLabel = hourLabel;
        this.minuteLabel = minuteLabel;
        this.secondLabel = secondLabel;
        this.watch = watch;
        this.watch.setOnAddSecond(function (newTime) {
            _this.hourLabel.textContent = _this.addAggregate(newTime.hour);
            _this.minuteLabel.textContent = _this.addAggregate(newTime.minute);
            _this.secondLabel.textContent = _this.addAggregate(newTime.second);
        });
    }
    WatchLabel.prototype.addAggregate = function (partTime) {
        var aggregate = "0";
        var lengthPartTime = 2;
        var stringTime = String(partTime);
        return stringTime.length < lengthPartTime
            ? aggregate + stringTime
            : stringTime;
    };
    return WatchLabel;
}());
