import { ParseStrategy } from "./ParseStrategy";

export class ParseDecimalStrategy implements ParseStrategy {

    parse(text: string): string {
        return text.split('').map(function (char) {
            return char.charCodeAt(0).toString(10);
        }).join(' ');
    }

    parseToText(text: string): string {
        let string = '';

        text.split(' ').map(function(bin) {
            string += String.fromCharCode(parseInt(bin, 10));
        });
        return string;
    }

    type: string = "decimal";

}