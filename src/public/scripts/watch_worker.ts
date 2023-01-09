self.addEventListener("message", (event:MessageEvent) => {
    const oldTime:TimeFormat = event.data;

    setTimeout(() => {
        const newTime:TimeFormat = addOneSecond(oldTime);
        postMessage(newTime);
    }, 1000);
});

function addOneSecond({hour, minute, second}:TimeFormat) : TimeFormat {
    second++;

    if (second > 60) {
        minute++;
        second = 0;
        if (minute > 60) {
            hour++;
            minute = 0;
            if (hour > 24) {
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