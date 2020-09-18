import {request} from "./request";

export function getHotComment() {
  return request({
    url: '/comment/hotwall/list'
  })
}
