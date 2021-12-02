import { ParseStrategy } from "./ParseStrategy";

export class ParseOctalStrategy implements ParseStrategy {

    parse(text: string): string {
        return text.split('').map(function (char) {
            return char.charCodeAt(0).toString(8)
        }).join(' ');
    }

    parseToText(text: string): string {
        let string = '';

        text.split(' ').map(function(bin) {
            string += String.fromCharCode(parseInt(bin, 8));
        });
        return string;
    }

    type: string = "octal";

}