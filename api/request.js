import { generateHeader } from "helper/generateHeader";
import { service } from "./service";

async function getRequest(URL, PARAMS, TOKEN) {
  return await service({
    url: URL,
    method: "GET",
    params: PARAMS,
    headers: generateHeader(TOKEN),
  });
}
async function postRequest(URL, PARAMS, DATA, TOKEN) {
  return await service({
    url: URL,
    method: "POST",
    data: DATA,
    params: PARAMS,
    headers: generateHeader(TOKEN),
  });
}
async function putRequest(URL, DATA, PARAMS, TOKEN) {
  return await service({
    url: URL,
    method: "PUT",
    data: DATA,
    params: PARAMS,
    headers: generateHeader(TOKEN),
  });
}
async function deleteRequest(URL, DATA, PARAMS, TOKEN) {
  return await service({
    url: URL,
    method: "DELETE",
    data: DATA,
    params: PARAMS,
    headers: generateHeader(TOKEN),
  });
}

export { getRequest, postRequest, putRequest, deleteRequest };
