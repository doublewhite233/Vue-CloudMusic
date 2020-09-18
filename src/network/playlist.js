import {request} from "./request";

export function getPlaylistDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
