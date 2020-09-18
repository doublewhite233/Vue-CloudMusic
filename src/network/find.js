import {request} from "./request";

export function getBanner() {
  return request({
    url: '/banner',
    params: {
      type: 1
    }
  })
}

export function getFindData() {
  return request({
    url: '/homepage/block/page'
  })
}
