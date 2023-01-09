class Watch {
    private hour:number;
    private minute:number;
    private second:number;
    private worker:Worker;
    private onAddSecond: ((currentTime: TimeFormat) => void) | undefined;

    constructor(hour:number, minute:number, second:number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;

        this.worker = new Worker("/scripts/watch_worker.js");
        this.initWorker();
    }

    private initWorker() : void {
        const dataObject : TimeFormat = {
            "hour": this.hour,
            "minute": this.minute,
            "second": this.second,
        };

        this.worker.postMessage(dataObject);

        this.worker.addEventListener("message", (event:MessageEvent) => {
            const newTime:TimeFormat = event.data;
            this.setTime(newTime);
            this.worker.postMessage(newTime);

            if (this.onAddSecond) {
                this.onAddSecond(newTime);
            }
        });
    }

    public setOnAddSecond(callback: (current:TimeFormat) => void) {
        this.onAddSecond = callback;
    }

    setTime({hour, minute, second} : TimeFormat) : void {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

}