import {request} from "./request";

export function getTopMV(area,offset) {
  return request({
    url: '/top/mv',
    params: {
      limit: 10,
      area,
      offset
    }
  })
}

export function getMVUrl(id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}
