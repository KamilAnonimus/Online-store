import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      userInfo: [],
      authorizedUser: false,
      visibilityRoomUser: false,
    }
  }
})

export default store;