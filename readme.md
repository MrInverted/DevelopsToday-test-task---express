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