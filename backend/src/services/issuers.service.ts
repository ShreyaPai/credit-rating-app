import { IssuierRepository } from "../repositories/issuer.repository";

export class IssuerService {
  constructor(private _issuerRepository: IssuierRepository) {}

  allIssuers: any;

  getAll() {
    console.log("Issuer Service - getAll");
    this.allIssuers = this._issuerRepository.getAll();
    return this.allIssuers;
  }

  getById(id: string) {
    console.log("Issuer Service - getById", id);
    return this._issuerRepository.getById(id);
  }
}
