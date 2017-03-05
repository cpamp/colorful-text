import { Styles } from './Styles';
import { Style } from './Style';

export module Colorful {
    function setStyle(style: Style, text: string) {
        return style.style(text);
    }

    export function reset(text: string) {
        return setStyle(Styles.Reset, text);
    }

    export function bold(text: string) {
        return setStyle(Styles.Bold, text);
    }

    export function faint(text: string) {
        return setStyle(Styles.Faint, text);
    }

    export function italic(text: string) {
        return setStyle(Styles.Italic, text);
    }

    export function underline(text: string) {
        return setStyle(Styles.Underline, text);
    }

    export function blink(text: string) {
        return setStyle(Styles.Blink, text);
    }

    export function blinkFast(text: string) {
        return setStyle(Styles.BlinkFast, text);
    }

    export function reverse(text: string) {
        return setStyle(Styles.Reverse, text);
    }

    export function hidden(text: string) {
        return setStyle(Styles.Hidden, text);
    }

    export function strike(text: string) {
        return setStyle(Styles.Strike, text);
    }

    export module fg {
        export function black(text: string) {
            return setStyle(Styles.FgBlack, text);
        }

        export function red(text: string) {
            return setStyle(Styles.FgRed, text);
        }

        export function green(text: string) {
            return setStyle(Styles.FgGreen, text);
        }

        export function yellow(text: string) {
            return setStyle(Styles.FgYellow, text);
        }

        export function blue(text: string) {
            return setStyle(Styles.FgBlue, text);
        }

        export function magenta(text: string) {
            return setStyle(Styles.FgMagenta, text);
        }

        export function cyan(text: string) {
            return setStyle(Styles.FgCyan, text);
        }

        export function white(text: string) {
            return setStyle(Styles.FgWhite, text);
        }
    }

    export module bg {
        export function black(text: string) {
            return setStyle(Styles.BgBlack, text);
        }

        export function red(text: string) {
            return setStyle(Styles.BgRed, text);
        }

        export function green(text: string) {
            return setStyle(Styles.BgGreen, text);
        }

        export function yellow(text: string) {
            return setStyle(Styles.BgYellow, text);
        }

        export function blue(text: string) {
            return setStyle(Styles.BgBlue, text);
        }

        export function magenta(text: string) {
            return setStyle(Styles.BgMagenta, text);
        }

        export function cyan(text: string) {
            return setStyle(Styles.BgCyan, text);
        }

        export function white(text: string) {
            return setStyle(Styles.BgWhite, text);
        }
    }

    export function framed(text: string) {
        return setStyle(Styles.Framed, text);
    }

    export function encircled(text: string) {
        return setStyle(Styles.Encircled, text);
    }

    export function overlined(text: string) {
        return setStyle(Styles.Overlined, text);
    }
}