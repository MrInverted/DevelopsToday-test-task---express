## 1. Clone this repository
```
git clone https://github.com/MrInverted/DevelopsToday-test-task---react .
```

## 2. Install all dependencies
```
npm install
```

## 3. Start project
```
npm start
```

## For tests
```
npm test
```

---

## GET: /

```
success: true
data: Countries[]
```
```
Countries: 
  countryCode: string
  name: string
```
---

## GET: /:country_code
```
success: true
data: Data
```
```
Data:
  borders: Border[]
  population: Population[]
  flagUrl: string
  officialName: string
```
```
Border:
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: any
```
```
Population:
  year: number
  value: number
```
```
error: true
message: string
```

---

## Note
In some cases the country is called by it's __common name__: 

```
// https://date.nager.at/api/v3/CountryInfo/by

"countryCode": "BY",
"commonName": "Belarus",
"officialName": "Republic of Belarus",
```
```
// https://countriesnow.space/api/v0.1/countries/population

"code": "BLR",
"country": "Belarus",
```

and in others by it's __official name__:

```
// https://date.nager.at/api/v3/CountryInfo/cz

"countryCode": "CZ",
"commonName": "Czechia",
"officialName": "Czech Republic",
```
```
// https://countriesnow.space/api/v0.1/countries/population

"code": "CZE",
"country": "Czech Republic",
```

Also not every country has a flag url.