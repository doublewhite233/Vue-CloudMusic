import {request} from "./request";

export function getPlaylistDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function subscribe(id,t,cookie) {
  return request({
    url: '/playlist/subscribe',
    params: {
      id,
      t,
      cookie
    }
  })
}

export function createList(name, cookie) {
  return request({
    url: '/playlist/create',
    params: {
      name,
      cookie
    }
  })
}
