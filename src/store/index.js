import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "matt",
      fullName: "Matthew LeBlanc",
    },
  },
  getters: {
    firstName: (state) => {
      return state.user.fullName.split(" ")[0];
    },
  },
  mutations: {
    firstName(state, payload) {
      let firstName = payload;
      let nameArr = this.state.user.fullName.split(" ");
      nameArr[0] = firstName;
      this.state.user.fullName = nameArr.join(" ");
    },
  },
  actions: {},
  modules: {},
});
