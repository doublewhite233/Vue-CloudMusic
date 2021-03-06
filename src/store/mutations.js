import Vue from 'vue'

export default {
  addMusicToList(state, payload) {
    let addFlag = true
    if (state.playList.length >= 1){
      for (let i = 0; i < state.playList.length; i++) {
        if (state.playList[i].id === payload.id) {
          addFlag = false
        }
      }
      if (addFlag === true) {
        state.playList.push(payload)
      }
    }else {
      state.playList.push(payload)
    }
    state.nowPlayingMusic = payload
    Vue.set(state.nowPlayingMusic,'isPlaying',true)
    // state.nowPlayingMusic.isPlaying = true
  },

  loginuserinfo(state, payload) {
    state.userInfo = payload
  },

  setMVUrl(state,payload) {
    state.nowMVid = payload
  },

  pause(state) {
    Vue.set(state.nowPlayingMusic,'isPlaying',false)
  },
  play(state) {
    Vue.set(state.nowPlayingMusic,'isPlaying',true)
  },
  updateTime(state, payload) {
    Vue.set(state.nowPlayingMusic,'displayTime',payload)
  },
  upDatePercent(state, payload) {
    Vue.set(state.nowPlayingMusic,'percent',payload)
  },
  setPlayingMusic(state, payload) {
    state.nowPlayingMusic = state.playList [payload]
  },
  playNextMusic(state) {
    let index = 0
    for (let i = 0; i < state.playList.length; i++) {
      if (state.playList[i].id === state.nowPlayingMusic.id) {
        index = i
      }
    }
    if (index === state.playList.length - 1) {
      state.nowPlayingMusic = state.playList [0]
    } else {state.nowPlayingMusic = state.playList [index+1]}
  },
  playBeforeMusic(state) {
    let index = 0
    for (let i = 0; i < state.playList.length; i++) {
      if (state.playList[i].id === state.nowPlayingMusic.id) {
        index = i
      }
    }
    if (state.playList.length === 1) {
      state.nowPlayingMusic = state.playList [0]
    } else {
      if (index === 0) {
        state.nowPlayingMusic = state.playList [state.playList.length - 1]
      } else {
        state.nowPlayingMusic = state.playList [index - 1]
      }
    }
  },
  delSubscribe(state,payload) {
    for (let i = 0; i < state.userInfo.playlist.length; i++) {
      if (state.userInfo.playlist[i].id == payload) {
        state.userInfo.playlist.splice(i,1)
      }
    }
  },
  addSubscribe(state,payload) {
    let flag = true
    for (let i = 0; i < state.userInfo.playlist.length; i++) {
      if (state.userInfo.playlist[i].id === payload.id) {flag = false}
    }
    if(flag = true) {
      state.userInfo.playlist.push(payload)
    }
  },
  setLikelist(state,payload) {
    Vue.set(state.userInfo,'likelist',payload)
  },
  addLikeMusic(state, payload) {
    let flag = true
    for (let i = 0; i < state.userInfo.likelist.length; i++) {
      if (state.userInfo.likelist[i].id == payload.id) {flag = false}
    }
    if(flag = true) {
      state.userInfo.likelist.push(payload)
    }
  },
  delLikeMusic(state, payload) {
    for (let i = 0; i < state.userInfo.likelist.length; i++) {
      if (state.userInfo.likelist[i] == payload) {
        state.userInfo.likelist.splice(i,1)
      }
    }
  }
}
