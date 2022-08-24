import axios from "axios";
import Vuex from "vuex";

//to handle state
const state = {
  questions: [],
  score:0,
};

//to handle state
const getters = {
  all_questions(state) {
    return state.questions;
  },
};

//to handle actions
const actions = {
  get_all_questions({ commit }) {
    axios
      .get("http://localhost:8080/api/quizzes")
      .then((res) => {
        commit("set_data", res.data.questions);
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
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

// const Answerslabels = time;
// console.log("eeee", Answerslabels);

// if (Array.isArray(Answerslabels)) {
//   Answerslabels.filter((el) => {
//     if (Array.isArray(el.answers)) {
//       const app = el.answers;
//       app.forEach((element) => {
//         return element.Answerslabels;
//       });
//     }
//   });
// console.log(Answerslabels);
