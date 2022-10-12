import DependencyEnum from 'shared/domain/entities/dependencyEnum'
import { HttpRequest, HttpResponse } from 'shared/domain/entities/http'

import { HttpPort } from 'shared/data/ports/http.port'

import axios, { AxiosError, AxiosResponse } from 'axios'
import { container, Lifecycle, injectable } from 'tsyringe'

@injectable()
export default class HttpAdapter<RequestBody = unknown, ResponseBody = unknown>
  implements HttpPort<RequestBody, ResponseBody>
{
  constructor(private baseURL?: URL, private headers?: unknown) {}

  async request(
    params: HttpRequest<RequestBody>
  ): Promise<HttpResponse<ResponseBody>> {
    let axiosResponse: AxiosResponse<ResponseBody>

    try {
      axiosResponse = await axios.request({
        baseURL: this.baseURL?.toString(),
        url: params.urlPath,
        method: params.method,
        data: params.body,
        headers: params.headers || this.headers,
      })
    } catch (e) {
      const error = e as AxiosError<ResponseBody>

      if (error.response) axiosResponse = error.response
      else throw error
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
      headers: axiosResponse.headers,
    }
  }

  setBaseURL(baseURL: URL): void {
    this.baseURL = baseURL
  }

  setHeaders(headers: unknown): void {
    this.headers = headers
  }
}

container.register(
  DependencyEnum.HTTP_ADAPTER,
  {
    useClass: HttpAdapter,
  },
  { lifecycle: Lifecycle.Singleton }
)
