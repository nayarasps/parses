import { ParseStrategy } from "./ParseStrategy";


export class ParseBinaryStrategy implements ParseStrategy {

    parse(text: string): string {
        return text.split('').map(function (char) {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
    }

    parseToText(text: string): string {
        let string = '';

        text.split(' ').map(function(bin) {
            string += String.fromCharCode(parseInt(bin, 2));
        });
        return string;
    }

    type: string = "binary";

}