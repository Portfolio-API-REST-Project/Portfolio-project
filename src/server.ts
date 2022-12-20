import express, { Request, Response } from "express";
import cors from "cors";
import router from "./route/route"


const app = express()
app.use(cors());
app.use (router);
// app.get("/portfolio", (req: Request, res: Response) => {
//         res.json({ message: "name" })
//     });

app.listen(3008, () => console.log("listening on port 3008"));