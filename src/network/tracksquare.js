import {request} from "./request";

export function getTrackType() {
  return request({
    url: '/playlist/catlist'
  })
}

export function getTrackInfo(cat,offset) {
  return request({
    url: '/top/playlist',
    params: {
      cat,
      offset: offset *30,
      limit: 30
    }
  })
}
