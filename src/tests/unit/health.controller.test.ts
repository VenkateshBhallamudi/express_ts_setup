import { getHealth } from "../../controllers/health.controller";
import type { Request, Response } from "express";

describe("getHealth controller", () => {
  it("responds with Health OK", () => {
    const req = {} as Request;

    const res = {
      json: jest.fn()
    } as unknown as Response;

    getHealth(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: "Health OK" });
  });
});
