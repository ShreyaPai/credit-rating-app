import { Request, Response } from "express";
import { IssuerService } from "../services/issuers.service";

export class IssuerController {
  constructor(private _issuerService: IssuerService) {}

  getAllIssuers = (request: Request, response: Response) => {
    console.log("Issuer Controller - getAllIssuers");
    const result = this._issuerService.getAll();

    return response.status(200).json(result);
  };

  getById = (request: Request, response: Response) => {
    const id = request.params.id as string;
    console.log("Issuer Controller - getById", id);
    const result = this._issuerService.getById(id);

    if (!result) {
      return response.status(404).json({
        'message': 'Not found'
      })
    } 

    return response.status(200).json(result);
  };
}
