import { Request, Response } from "express";
import * as utils from "../utils/utils";



export const getAll = async (req: Request, res: Response) => {
  try {
    const response = await utils.getAll();

    res.json({
      success: true,
      data: response
    });

  } catch (error) {
    res.status(500).json({
      error: true,
      message: error
    })
  }
}