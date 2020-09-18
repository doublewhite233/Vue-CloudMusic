import {request} from "./request";

export function getHotSearch() {
  return request({
    url: '/search/hot/detail'
  })
}

export function getSearchData(keywords,offset) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords,
      offset
    }
  })
}
