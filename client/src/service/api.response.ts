export interface Url {
  code: string
  originalUrl: string
  newUrl: string
}

export interface UrlResponse {
  url: Array<Url>
}