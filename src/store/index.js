import axios from "axios";
import Vuex from "vuex";

//to handle state
const state = {
  questions: [],
  answers: [],
  right_answers: [],
  score: 0,
  index: 0,
  time: [],
  timer: 0,
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
    return state.time[state.index];
  },
  get_right_answers(state) {
    return state.right_answers;
  },
  get_answers(state) {
    return state.answers;
  },
};

//to handle actions
const actions = {
  get_all_questions({ commit }) {
    axios
      .get("http://localhost:8080/api/quizzes")
      .then((res) => {
        //* all qustions
        commit("set_data", res.data.questions);

        //* questions answers
        const answers = res.data.questions.map((el) => el.answers);
        commit("set_answers", answers);

        //* questions time
        const time = res.data.questions.filter((el) => el.time);
        
        commit("set_time", time);

        //* correct answers only ,
        const right_ansswr = res.data.questions.map((el) =>
          el.answers.filter((el) => el.correct)
        );
        commit("set_right_answers", right_ansswr);
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
  set_answers(state, answers) {
    state.answers = answers;
  },
  set_right_answers(state, right_answers) {
    state.right_answers = right_answers;
  },
  set_time(state, time) {
    const real_time = time.map((el) => el.time);
    state.time = real_time;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
