

export class Style {
    constructor(private start: number, private end?: number) { }

    public stylize(code: number) {
        return '\x1b[' + code + 'm';
    };

    public style(text: string) {
        if (this.end == null) {
            return text + this.stylize(this.start);
        } else {
            return this.stylize(this.start) + text + this.stylize(this.end);
        }
    };
}