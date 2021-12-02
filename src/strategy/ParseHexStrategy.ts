import { ParseStrategy } from "./ParseStrategy";

export class ParseHexStrategy implements ParseStrategy {

    parse(text: string): string {
        return text.split('').map(function (char) {
            return char.charCodeAt(0).toString(16);
        }).join(' ');
    }

    parseToText(text: string): string {
        let string = '';

        text.split(' ').map(function(bin) {
            string += String.fromCharCode(parseInt(bin, 16));
        });
        return string;
    }

    type: string = "hex";

}