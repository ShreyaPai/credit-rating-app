export interface IssuerDetailsDto {
  issuer: IssuerData
  drivers: Driver[]
  aiInsight: AiInsight
}

export interface IssuerData {
  id: string
  name: string
  industry: string
  rating: string
  outlook: string
  lastUpdated: string
  country: string
}

export interface Driver {
  id: string
  title: string
  impact: string
  description: string
}

export interface AiInsight {
  summary: string
}
