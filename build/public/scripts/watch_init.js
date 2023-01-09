"use strict";
var currentTime = new Date(Date.now());
var currentHours = currentTime.getHours();
var currentMinute = currentTime.getMinutes();
var currentSecond = currentTime.getSeconds();
var watch = new Watch(currentHours, currentMinute, currentSecond);
var hourLabel = document.querySelector(".watch__hour");
var minuteLabel = document.querySelector(".watch__minute");
var secondLabel = document.querySelector(".watch__second");
var isNotFoundElementOfWatch = !hourLabel || !minuteLabel || !secondLabel;
if (isNotFoundElementOfWatch) {
    throw new Error("Not found all elements for create watch");
}
var watchLabel = new WatchLabel(watch, hourLabel, minuteLabel, secondLabel);
