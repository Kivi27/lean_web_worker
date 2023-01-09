class WatchLabel {
    private hourLabel:HTMLElement;
    private minuteLabel:HTMLElement;
    private secondLabel:HTMLElement;
    private watch:Watch;

    constructor(watch:Watch, hourLabel:HTMLElement, minuteLabel:HTMLElement, secondLabel:HTMLElement) {
        this.hourLabel = hourLabel;
        this.minuteLabel = minuteLabel;
        this.secondLabel = secondLabel;
        this.watch = watch;

        this.watch.setOnAddSecond((newTime:TimeFormat) => {
            this.hourLabel.textContent = this.addAggregate(newTime.hour);
            this.minuteLabel.textContent = this.addAggregate(newTime.minute);
            this.secondLabel.textContent = this.addAggregate(newTime.second);
        });
    }

    private addAggregate(partTime:number) : string {
        const aggregate:string = "0";
        const lengthPartTime:number = 2;
        const stringTime:string = String(partTime);

        return stringTime.length < lengthPartTime
            ? aggregate + stringTime
            : stringTime;
    }
}