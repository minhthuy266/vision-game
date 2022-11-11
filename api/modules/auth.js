import { postRequest } from "api/request"

const AUTH_SERVICE = "/vision-service/get-auth-info"

export function getAuthInfor(TOKEN, DATA, PARAMS) {
  return postRequest(AUTH_SERVICE, PARAMS, DATA, TOKEN)
}
