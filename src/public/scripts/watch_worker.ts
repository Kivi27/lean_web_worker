const timeUpdateMs = 1000;
const limitSecondOrMinute = 60;
const limitHours = 24;

self.addEventListener("message", (event:MessageEvent) => {
    const oldTime:TimeFormat = event.data;

    setTimeout(() => {
        const newTime:TimeFormat = addOneSecond(oldTime);
        postMessage(newTime);
    }, timeUpdateMs);
});

function addOneSecond({hour, minute, second}:TimeFormat) : TimeFormat {
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
        hour,
        minute,
        second
    };
}