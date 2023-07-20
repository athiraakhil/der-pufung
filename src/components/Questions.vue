<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="question">
    <h2>{{ question.text }}</h2>
    <div v-for="(option, index) in question.options" :key="index">
      <label>
        <input
          type="radio"
          :value="option"
          v-model="selectedOption"
          @change="selectOption"
        />
        {{ option }}
      </label>
    </div>
    <button v-if="hasNextQuestion" @click="nextQuestion">Next</button>
  </div>
</template>
  
  <script>
export default {
  props: {
    question: Object,
    index: Number,
  },
  data() {
    return {
      selectedOption: String,
    };
  },
  computed: {
    hasNextQuestion() {
      return this.index < this.$parent.questions.length - 1;
    },
  },
  methods: {
    checkAnswer() {
      console.log("hghg==>", this.selectedOption);
      this.$emit("answer", this.selectedOption);
    },
    nextQuestion() {
      this.$emit("next");
      this.selectedOption = null;
    },
    selectOption(option) {
      this.$emit("answer", option); // Emit the selected option to the parent component (App.vue)
    },
  },
};
</script>
  
  <style>
.question{

}
</style>
  

