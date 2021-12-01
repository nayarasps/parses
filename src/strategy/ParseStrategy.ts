export interface ParseStrategy {
    type: string;
    parse(text: string) : string;
    parseToText(text: string): string;
}