import express, { Application, Request, Response } from "express";
import {convertAllTypes} from "./adapter/TextAdapter";

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",
    async (req: Request, res: Response): Promise<Response> => {

        let data: string = req.body.data
        let type: string = req.body.type

        return res.status(200).send(convertAllTypes(data, type));
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    // @ts-ignore
    console.error(`Error occurred: ${error.message}`);
}
