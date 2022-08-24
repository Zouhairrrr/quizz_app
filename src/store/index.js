import axios from "axios";
import Vuex from "vuex";

//to handle state
const state = {
  questions: [],
  score: 0,
  index: 0,
  time: 0,
};

//to handle state
const getters = {
  all_questions(state) {
    return state.questions;
  },
  get_index(state) {
    return state.index;
  },
  get_time(state) {
    return state.time;
  },
};

//to handle actions
const actions = {
  get_all_questions({ commit }) {
    axios
      .get("http://localhost:8080/api/quizzes")
      .then((res) => {
        commit("set_data", res.data.questions);
        commit("get_question_time", res.data.questions);
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};

//to handle mutations

const mutations = {
  // //* labels of the anwsers
  set_data(state, questions) {
    state.questions = questions;
  },
  get_question_time(state, time) {
    const real_time = time.map((el) => el.time);
    state.time = real_time;
  },
  set_timer() {
    console.log(time);
    if (val > 0) {
      setTimeout(() => {
        return (val -= 1);
      }, 1000);
    }
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
