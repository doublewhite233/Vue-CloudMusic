import {request} from "./request";

export function loginByPhone(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}

export function loginByEmail(email, password) {
  return request({
    url: '/login',
    params: {
      email,
      password
    }
  })
}

export function getDetailInfo(uid) {
  return request({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}
