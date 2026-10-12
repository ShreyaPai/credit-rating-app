import { AppError } from "../errors/error";
import { IssuerDetails } from "../interfaces/issuer-details.interface";
import { Issuers } from "../interfaces/issuers.interface";
import { IssuierRepository } from "../repositories/issuer.repository";

export class IssuerService {
  constructor(private _issuerRepository: IssuierRepository) {}

  public allIssuers: Issuers = { data: [], totalElements: 0 };

  public getAll(): Issuers {
    console.log("Issuer Service - getAll");
    this.allIssuers = this._issuerRepository.getAll();
    return this.allIssuers;
  }

  public getById(id: string): IssuerDetails {
    console.log("Issuer Service - getById", id);
    const result = this._issuerRepository.getById(id);
    if (result) {
      return result;
    } else {
      throw new AppError(404, `Issuer with ID ${id} not found`);
    }
  }
}
