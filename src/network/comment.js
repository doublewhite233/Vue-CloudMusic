import {request} from "./request";

export function getComment(id,offset) {
  return request({
    url: '/comment/music',
    params: {
      id,
      offset: offset*20
    }
  })
}
