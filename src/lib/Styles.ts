import { Style } from './Style';

export module Styles {
    export const Reset = new Style(0);
    export const Bold = new Style(1, 21);
    export const Faint = new Style(2, 22);
    export const Italic = new Style(3, 23);
    export const Underline = new Style(4, 24);
    export const Blink = new Style(5, 25);
    export const BlinkFast = new Style(6, 25);
    export const Reverse = new Style(7, 27);
    export const Hidden = new Style(8, 28);
    export const Strike = new Style(9, 29);

    export const FgBlack = new Style(30, 39);
    export const FgRed = new Style(31, 39);
    export const FgGreen = new Style(32, 39);
    export const FgYellow = new Style(33, 39);
    export const FgBlue = new Style(34, 39);
    export const FgMagenta = new Style(35, 39);
    export const FgCyan = new Style(36, 39);
    export const FgWhite = new Style(37, 39);

    export const BgBlack = new Style(40, 49);
    export const BgRed = new Style(41, 49);
    export const BgGreen = new Style(42, 49);
    export const BgYellow = new Style(43, 49);
    export const BgBlue = new Style(44, 49);
    export const BgMagenta = new Style(45, 49);
    export const BgCyan = new Style(46, 49);
    export const BgWhite = new Style(47, 49);

    export const Framed = new Style(51, 54);
    export const Encircled = new Style(52, 54);
    export const Overlined = new Style(53, 55);
}