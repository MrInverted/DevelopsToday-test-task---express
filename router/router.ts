import express, { Request, Response } from "express";
import { getAll } from "./getAll";
import { getOne } from "./getOne";

const router = express.Router();

router.get("/", getAll);
router.get("/:country", getOne);

export { router };