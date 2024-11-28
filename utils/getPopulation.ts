import fetch from "node-fetch";

interface IResponse {
  error: boolean;
  msg: string;
  data: IData;
}

interface IData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: IPopulationCount[];
}

interface IPopulationCount {
  year: number;
  value: number;
}



export const getPopulation = async (country: string) => {
  const data = { country };

  const request = await fetch(`https://countriesnow.space/api/v0.1/countries/population`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  if (!request.ok) throw new Error("Error while getting population");

  const response = await request.json();

  return response as IResponse;
}