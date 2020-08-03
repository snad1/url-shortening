import request from "supertest";
import app from "../index";

describe("Route test ", () => {
  let code = ''
  it("Test", async done => {
    expect(1).toBe(1)
    done()
  });
  it("Test url", async done => {
    const res = await request(app).get("/test");
    expect(res.status).toBe(200)
    done()
  });
  it("All urls", async done => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    done()
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
jest.setTimeout(10000)