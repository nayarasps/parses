export enum Type {
    TEXT = "text",
    DECIMAL = "decimal",
    HEXADECIMAL = "hex",
    BINARY = "binary",
    OCTAL = "octal"

}

export class Model {

    private readonly data: String;
    private readonly type: String;

    constructor(data: String, type: String) {
        this.data = data;
        this.type = type;
    }
}



