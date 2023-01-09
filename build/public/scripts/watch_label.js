"use strict";
var WatchLabel = /** @class */ (function () {
    function WatchLabel(watch, hourLabel, minuteLabel, secondLabel) {
        var _this = this;
        this.hourLabel = hourLabel;
        this.minuteLabel = minuteLabel;
        this.secondLabel = secondLabel;
        this.watch = watch;
        this.watch.setOnAddSecond(function (newTime) {
            _this.hourLabel.textContent = String(newTime.hour);
            _this.minuteLabel.textContent = String(newTime.minute);
            _this.secondLabel.textContent = String(newTime.second);
        });
    }
    return WatchLabel;
}());
