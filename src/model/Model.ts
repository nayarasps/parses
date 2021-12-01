
export class Model {

    private readonly data: String;
    private readonly type: String;

    constructor(data: String, type: String) {
        this.data = data;
        this.type = type;
    }

    getData() { return this.data}
    getType() { return this.type}
}



