import fetch from "node-fetch";

export interface IResponse {
  error: boolean;
  msg: string;
  data: IData;
}

export interface IData {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}



export const getFlag = async (country: string) => {
  const data = { country };

  const request = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  if (!request.ok) throw new Error("Error while getting flag");

  const response = await request.json();

  return response as IResponse;
}