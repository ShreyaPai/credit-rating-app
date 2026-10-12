export interface Issuers {
  data: IssuerData[];
  totalElements: number;
}

export interface IssuerData {
  id: string;
  issuerName: string;
  industry: string;
  rating: string;
  outlook: string;
  lastUpdatedDate: string;
}
