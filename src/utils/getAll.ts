import fetch from "node-fetch";

interface IResponse {
  countryCode: string;
  name: string;
}



export const getAll = async () => {
  const request = await fetch("https://date.nager.at/api/v3/AvailableCountries");

  if (!request.ok) throw new Error("Error while getting all countries");

  const response = await request.json();

  return response as IResponse[];
}