type HTMLElementOrNull = HTMLElement | null;

const currentTime:Date = new Date(Date.now());
const currentHours:number = currentTime.getHours();
const currentMinute:number = currentTime.getMinutes();
const currentSecond:number = currentTime.getSeconds();

const watch:Watch = new Watch(currentHours, currentMinute, currentSecond);

const hourLabel:HTMLElementOrNull = document.querySelector(".watch__hour");
const minuteLabel:HTMLElementOrNull = document.querySelector(".watch__minute");
const secondLabel:HTMLElementOrNull = document.querySelector(".watch__second");

const isNotFoundElementOfWatch = !hourLabel || !minuteLabel || !secondLabel;

if (isNotFoundElementOfWatch) {
    throw new Error("Not found all elements for create watch");
}

const watchLabel:WatchLabel = new WatchLabel(watch, hourLabel, minuteLabel, secondLabel);
