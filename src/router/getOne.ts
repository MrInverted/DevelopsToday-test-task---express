import { Request, Response } from "express";
import * as utils from "../utils/utils"

interface IParams {
  country: string;
}



export const getOne = async (req: Request<IParams>, res: Response) => {
  try {
    const { country } = req.params;

    const borders = await utils.getBorder(country);

    if (!borders) {
      res.status(404).json({
        error: true,
        message: "There is no country found by this country code"
      });

      return;
    }

    const population = await Promise.any([
      utils.getPopulation(borders.commonName),
      utils.getPopulation(borders.officialName)
    ]);

    const flag = await Promise.any([
      utils.getFlag(borders.commonName),
      utils.getFlag(borders.officialName)
    ]).catch(() => { });

    res.json({
      success: true,
      data: {
        borders: borders.borders,
        population: population.data.populationCounts,
        flagUrl: flag?.data?.flag ?? "",
        officialName: borders.officialName
      }
    });

  } catch (error) {
    res.status(500).json({
      error: true,
      message: error
    })
  }
}