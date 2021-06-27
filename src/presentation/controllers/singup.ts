import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest } from "../helpers/http-helper";
import { MissingParamError } from "../erros/missing-param-error";
export class SingUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ["name", "email", "password"];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
