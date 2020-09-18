export default {
  getUserInfo(context, payload) {
    return new Promise((resolve, reject) => {
      let userInfo = context.state.userInfo

      context.commit('loginuserinfo',payload)
      resolve('用户登录')
    })
  },
  delMusicFromList(context, payload) {
    if (context.state.playList[payload].id !== context.state.nowPlayingMusic.id) {
      context.state.playList.splice(payload,1)
    } else {
      context.state.playList.splice(payload,1)
      context.commit('playBeforeMusic',payload)
    }
  }
}
