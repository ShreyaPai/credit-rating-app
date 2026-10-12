import { NextFunction, Request, Response } from "express";
import { IssuerService } from "../services/issuers.service";

export class IssuerController {
  constructor(private _issuerService: IssuerService) {}

  public getAllIssuers = (
    _request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    console.log("Issuer Controller - getAllIssuers");
    try {
      const result = this._issuerService.getAll();

      return response.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };

  public getById = (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const id = request.params.id as string;
      console.log("Issuer Controller - getById", id);
      const result = this._issuerService.getById(id);

      return response.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}
