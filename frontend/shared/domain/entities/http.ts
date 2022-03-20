/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type HttpRequest<Body = unknown, Headers = any> = {
  urlPath: string
  method: HttpMethod
  body?: Body
  headers?: Headers
}

export type HttpResponse<Body = unknown, Headers = unknown> = {
  statusCode: HttpStatusCode
  body: Body
  headers: Headers
}
