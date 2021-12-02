import {Model, Type} from "../model/Model";

import {ParseStrategy} from "../strategy/ParseStrategy";
import {ParseBinaryStrategy} from "../strategy/ParseBinaryStrategy";
import {ParseDecimalStrategy} from "../strategy/ParseDecimalStrategy";
import {ParseHexStrategy} from "../strategy/ParseHexStrategy";
import {ParseOctalStrategy} from "../strategy/ParseOctalStrategy";


let parsers: Array<ParseStrategy>;

let parseBinary = new ParseBinaryStrategy();
let parseDecimal = new ParseDecimalStrategy();
let parseHex = new ParseHexStrategy();
let parseOctal = new ParseOctalStrategy();


function init() {
    parsers = new Array<ParseStrategy>();
    parsers.push(parseBinary);
    parsers.push(parseDecimal);
    parsers.push(parseHex);
    parsers.push(parseOctal);
}

function convert(data: string, type: string): string {

    switch (type){
        case Type.TEXT:
            return data
        case Type.HEXADECIMAL:
            parsers = parsers.filter(item => item !== parseHex)
            return parseHex.parseToText(data);
        case Type.DECIMAL:
            parsers = parsers.filter(item => item !== parseDecimal);
            return parseDecimal.parseToText(data);
        case Type.BINARY:
            parsers = parsers.filter(item => item !== parseBinary)
            return parseBinary.parseToText(data)
        case Type.OCTAL:
            parsers = parsers.filter(item => item !== parseOctal)
            return parseOctal.parseToText(data);
        default:
            console.log('Type of format not available');
            return '';
        }

    }

function parseToModel(parse: ParseStrategy, data: string) {
    let parsed: string = parse.parse(data);
    return new Model(parsed, parse.type);
}


export function convertAllTypes(data: string, type: string) {
    init()

    let text: string = convert(data, type);
    let converted:Array<Model> = new Array<Model>();

    if (type !== "text") {
        converted.push(new Model(text, "text"));
    }

    parsers.forEach((element: any) => {
        converted.push(parseToModel(element, text));
    })

    return converted;
}
