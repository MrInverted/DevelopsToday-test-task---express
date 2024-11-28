# GET: /

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

# GET: /:country_code
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