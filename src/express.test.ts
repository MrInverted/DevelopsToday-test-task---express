import request from 'supertest';
import { app } from './express';



describe("GET: /", () => {
  it("Should return all countries", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success", true);
    expect(response.body.data.length).toBeGreaterThan(50);
  })
})

describe("GET: /:country-code", () => {
  it("Should return Ukraine", async () => {
    const response = await request(app).get("/ua");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success", true);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("borders");
    expect(response.body.data).toHaveProperty("population");
    expect(response.body.data).toHaveProperty("flagUrl", "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg");
    expect(response.body.data).toHaveProperty("officialName", "Ukraine");
  })

  it("Should return an error", async () => {
    const response = await request(app).get("/error-code");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("error", true);
    expect(response.body).toHaveProperty("message", "There is no country found by this country code");
  })
})