let data: Text;
let type: String;
let pretty: Boolean = true;

const requestModel = {
    "input": {
        "data": data,
        "type": type
    },
    "pretty": pretty
};

function getData() { return requestModel.input.data}

