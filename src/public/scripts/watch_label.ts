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
            this.hourLabel.textContent = String(newTime.hour);
            this.minuteLabel.textContent = String(newTime.minute);
            this.secondLabel.textContent = String(newTime.second);
        });

    }

}