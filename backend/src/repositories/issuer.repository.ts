import { issuerDetails } from "../data/issuer.data";
import { issuers } from "../data/issuers.data";
import { IssuerDetails } from "../interfaces/issuer-details.interface";
import { Issuers } from "../interfaces/issuers.interface";

export class IssuierRepository {
  public getAll(): Issuers {
    console.log("Issuer Repository - getAll");
    const response: Issuers = {
      data: issuers.data,
      totalElements: issuers.data.length,
    };
    return response;
  }

  public getById(id: string): IssuerDetails | undefined {
    console.log("Issuer Repository - getById");
    const issuer = issuers.data.find((issuer: any) => issuer.id === id);

    if (!issuer) {
      undefined;
    } else {
      const details: IssuerDetails =
        issuerDetails.find((issuer: any) => issuer.issuer.id === id) ??
        ({} as any);

      return details;
    }
  }
}
