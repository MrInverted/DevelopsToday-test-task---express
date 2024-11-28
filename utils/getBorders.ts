import fetch from "node-fetch";

interface IError {
  type: string;
  title: string;
  status: number;
  traceId: string;
}

interface ICountryBorder {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: any;
}

interface IResponse {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: ICountryBorder[];
}



export const getBorder = async (country: string) => {
  const request = await fetch(`https://date.nager.at/api/v3/CountryInfo/${country}`);

  if (!request.ok) return null;

  const response = await request.json();

  return response as IResponse;
}