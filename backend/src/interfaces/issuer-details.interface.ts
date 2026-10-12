export interface IssuerDetails {
  issuer: Issuer
  drivers: Driver[]
  aiInsight: AiInsight
}

export interface Issuer {
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
