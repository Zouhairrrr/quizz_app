<template>
  <div class="container">
    <!-- ll -->
    <!-- <div class="model">
      <button class="btn btn-next">start Test</button>
    </div> -->
    <div v-if="all_questions[get_index]" class="content">
      <div class="image">
        <img :src="all_questions[get_index].image" alt="" />
      </div>
      <div class="header">
        <span>
          Time:
          {{ timerCouner }} s
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
import { mapGetters, Store } from "vuex";
// import { ref } from "vue";
export default {
  name: "Question",
  computed: {
    ...mapGetters([
      "all_questions",
      "get_index",
      "get_time",
      "get_answers",
      "get_right_answers",
      // ...
    ]),
  },
  data: function () {
    return {

    // hadi hiya limakhedamach
      timerCouner: this.$store.getters.get_time
    };
  },
  mounted() {
    this.$store.dispatch("get_all_questions");
  },
  methods: {
    submit(e) {
      console.log(e.target.value);
      const answer_ = e.target.value;
      // console.log(this.$store.getters.get_index);
      const right_answers = [];
    },
    next(e) {
      e.preventDefault();
      this.$store.state.index++;
    },
    prev(e) {
      e.preventDefault();
      this.$store.state.index--;
    },

    countDown() {
      if (this.timerCouner > 0)
        setTimeout(() => {
          this.timerCouner-=1;
          this.countDown();
        }, 1000);
    },
  },
  // watch: {
  //   timerCouner: {
  //     handler(value) {
  //       if (value > 0) {
  //         setTimeout(() => {
  //           return (this.timerCouner -= 1);
  //         }, 1000);
  //       }
  //       clearTimeout();
  //     },
  //     immediate: true, // This ensures the watcher is triggered upon creation
  //   },
  },
};
</script>
