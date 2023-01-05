import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      userInfo: [],
      authorizedUser: false,
      visibilityRoomUser: false,
      visibilityLoader: false,
      visibilityApp: true,
    }
  }
})

export default store;