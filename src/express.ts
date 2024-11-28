import express from "express";
import "dotenv/config";
import cors from "cors";

import { router } from "./router/router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use("/", router);

export { app }