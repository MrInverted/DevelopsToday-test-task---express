import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./router/router";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use("/", router);

app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));


