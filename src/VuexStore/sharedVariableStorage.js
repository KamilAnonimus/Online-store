import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      userInfo: []
    }
  }
})

export default store;