import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      userInfo: [],
      authorizedUser: false,
      visibilityRoomUser: false,
      visibilityLoader: false,
      visibilityApp: true,
      clothestype: [
        {id:1, name: ''},
        {id:2, name: ''},
        {id:3, name: ''},
        {id:4, name: ''},
        {id:5, name: ''},
        {id:6, name: ''},
        {id:7, name: ''},
      ],
    }
  }
})

export default store;