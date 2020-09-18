import {request} from "./request";

export function getMusic(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getMusicUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })

}
