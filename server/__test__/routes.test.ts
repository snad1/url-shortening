import request from "supertest";
const app = require("../index");

describe("Route test ", () => {
  let code = ''
  it("All urls", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200)
  });
  it("Add url for shorten", async () => {
    const res = await request(app).post('/shorten').send({ originalUrl: 'https://example.com'});
    expect(res.status).toBe(200)
  });
  it("Get shorten url", async () => {
    const res = await request(app).get(`/${code}`);
    expect(res.status).toBe(200)
  });
});
jest.setTimeout(30000)