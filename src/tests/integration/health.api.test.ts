import request from "supertest";
import app from "../../app";

describe("GET /api/health", () => {
  it("returns health ok message", async () => {
    const res = await request(app).get("/api/health");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Health OK" });
  });
});
