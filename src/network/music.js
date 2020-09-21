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

export function getLikelist(id,cookie) {
 return request({
   url: '/likelist',
   params: {
     id,
     cookie
   }
 })
}

export function likeMusic(id,like,cookie) {
  return request({
    url: '/like',
    params: {
      id,
      like,
      cookie
    }
  })
}
