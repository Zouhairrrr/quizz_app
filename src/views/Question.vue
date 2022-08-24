<template>
  <div class="container">
    <!-- ll -->
  
    <div v-if="all_questions[get_index]" class="content">
      <div class="image">
        <img :src="all_questions[get_index].image" alt="" />
      </div>
      <div class="header">
        <span :v-on="countDownTimer">
          Time: {{ timerCount ? timerCount : "0" }} s
        </span>
        <span> Question :{{ get_index + 1 }}/5</span>
      </div>
      <div class="question-text">
        <h1>
          question {{ get_index + 1 }}:
          {{ all_questions[get_index].label }}
        </h1>
      </div>
      <div class="answers">
        <ul
          class="lists"
          v-for="(answers, index) in all_questions[get_index].answers"
          :key="index"
        >
          <li class="item-list" type="checkbox" name="question">
            <input
              @click="submit"
              class="inputs-label"
              type="button"
              :value="answers.label"
            />
          </li>
        </ul>
      </div>
      <div class="btn-wrappers">
        <button v-if="get_index > 0" class="btn btn-prev" v-on:click="prev">
          Prev
        </button>
        <button class="btn btn-next" v-on:click="next">Next</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Question",
  computed: mapGetters(["all_questions", "get_index", "get_time"]),

  data() {
    return {
      timerCount: this.$store.getters.get_time,
    };
  },
  mounted() {
    this.$store.dispatch("get_all_questions");
  },
  methods: {
    submit(e) {
      console.log(e.target.value);
    },
    next(e) {
      e.preventDefault();
      this.$store.state.index++;
    },
    prev(e) {
      e.preventDefault();
      this.$store.state.index--;
    },
    countDownTimer() {
      if (this.timerCount > 0) {
        setTimeout(() => {
          this.timerCount--;
          this.countDownTimer();
        }, 1000);
      }
    },
  },
  created() {
    this.countDownTimer();
  },
};
</script>
