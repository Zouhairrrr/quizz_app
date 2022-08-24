<template>
  <div class="container">
    <div class="border" v-if="Object.keys(all_questions) > 0">
      <div class="image">
        <!-- {{all_questions}} -->
        <img :src="all_questions.image" alt="" />
      </div>
      <div class="content">
        <div class="header">
          <span> Time: {{ all_questions.time }} s </span>
          <span> Question :{{}}/5</span>
        </div>
        <div class="question-text">
          <h1>question {{}}: {{ all_questions.label }}</h1>
        </div>
        <div class="answers">
          <ul
            class="lists"
            v-for="(answers, index) in all_questions.answers"
            :key="index"
          >
            <li class="item-list" type="checkbox" name="question">
              <input
                class="inputs-label"
                type="button"
                :value="answers.label"
                v-on:click="submit"
              />
            </li>
          </ul>
        </div>
        <div class="btn-wrappers">
          <button class="btn btn-prev">Prev</button>
          <button class="btn btn-next">Next</button>
        </div>
      </div>
    </div>

    <!-- ll -->

    <div class="border" v-for="(question, index) in all_questions" :key="index">
      <div class="image">
        <!-- {{all_questions}} -->
        <img :src="question.image" alt="" />
      </div>
      <div class="content">
        <div class="header">
          <span> Time: {{ question.time }} s </span>
          <span> Question :{{ index + 1 }}/5</span>
        </div>
        <div class="question-text">
          <h1>question {{ index + 1 }}: {{ question.label }}</h1>
        </div>
        <div class="answers">
          <ul
            class="lists"
            v-for="(answers, index) in question.answers"
            :key="index"
          >
            <li class="item-list" type="checkbox" name="question">
              <input
                class="inputs-label"
                type="button"
                :value="answers.label"
                v-on:click="submit"
              />
            </li>
          </ul>
        </div>
        <div class="btn-wrappers">
          <button class="btn btn-prev">Prev</button>
          <button class="btn btn-next">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Question",
  computed: mapGetters(["all_questions"]),
  mounted() {
    this.$store.dispatch("get_all_questions");
  },
  methods: {
    submit(e) {
      console.log(e.target.value);
    },
  },
};
</script>
