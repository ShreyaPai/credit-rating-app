export interface Issuers {
  data: Issuer[];
  totalElements: number;
}

export interface Issuer {
  id: string;
  issuerName: string;
  industry: string;
  rating: string;
  outlook: string;
  lastUpdatedDate: string;
}
