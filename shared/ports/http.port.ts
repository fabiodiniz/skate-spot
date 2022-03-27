import { HttpRequest, HttpResponse } from 'shared/entities/http'

export interface HttpPort<
  RequestBody = unknown,
  ResponseBody = unknown,
  ResponseHeaders = unknown
> {
  request(
    httpRequest: HttpRequest<RequestBody>
  ): Promise<HttpResponse<ResponseBody, ResponseHeaders>>
  setBaseURL?(baseURL: URL): void
  setHeaders?(headers: unknown): void
}
