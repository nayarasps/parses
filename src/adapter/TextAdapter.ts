import {Model} from "../model/Model";

import {ParseStrategy} from "../strategy/ParseStrategy";
import {ParseBinaryStrategy} from "../strategy/ParseBinaryStrategy";
import {ParseDecimalStrategy} from "../strategy/ParseDecimalStrategy";


let parsers: Array<Object>;

let parseBinary = new ParseBinaryStrategy();
let parseDecimal = new ParseDecimalStrategy();


function init() {
    parsers = new Array<Object>();
    parsers.push(parseBinary);
    parsers.push(parseDecimal);
}

function convert(data: string, type: string): string {

    switch (type){
        case "text":
            return data
        case "hex":
            return ''
        case "decimal:":
            parsers = parsers.filter(item => item !== parseDecimal)
            return parseDecimal.parseToText(data);
        case "binary":
            parsers = parsers.filter(item => item !== parseBinary)
            return parseBinary.parseToText(data);
        case "octal":
            return ''
        default:
            return ''
        }

    }

function parseModel(parse: ParseStrategy, data: string) {
    let parsed: string = parse.parse(data);
    return new Model(parsed, parse.type);
}


export function End(data: string, type: string) {
    init()
    let text: string = convert(data, type);
    let converted:Array<Model> = new Array<Model>();

    parsers.forEach((element: any) => {
        converted.push(parseModel(element, text));
    })

    return converted;
}