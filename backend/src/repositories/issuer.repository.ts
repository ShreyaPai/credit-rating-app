import { issuerDetails } from "../data/issuer.data";
import { issuers } from "../data/issuers.data";

export class IssuierRepository {
  getAll() {
    console.log("Issuer Repository - getAll");
    const response = {
      data: issuers.data,
      totalElements: issuers.data.length,
    };
    setTimeout(() => { return response; }, 500)
    
  }

  getById(id: string) {
    console.log("Issuer Repository - getById");
    const issuer = issuers.data.find((issuer: any) => issuer.id === id);

    if (!issuer) {
      return null;
    } else {
      const details = issuerDetails.find(
        (issuer: any) => issuer.issuer.id === id,
      );

      setTimeout(() => { return details; }, 300)
    }
  }
}
