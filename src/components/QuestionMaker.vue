<template>
    <div class="question-maker">
      <div class="question-field question-item">
        <label>Question</label>
        <textarea v-model="question"></textarea>
      </div>
      <div class="options-container">
        <div class="options-field" v-for="(option, index) in options" :key="index">
          <label>Option {{ index + 1 }} </label>
          <input type="text" v-model="options[index]" />
          <label>Correct? </label>
          <input type="checkbox" name="Correct" id="correctness">
        </div>
      </div>
      <div class="mark-field question-item">
        <label>Mark</label>
        <input type="number" v-model="mark" />
      </div>
      <div class="buttons question-item">
        <button class="destruction" @click="reset">Reset</button>
        <button class="success" @click="submit">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        question: "",
        options: ["", "", "", "", ""],
        mark: 0,
        correctAnswer: "",
      };
    },
    methods: {
      reset() {
        this.question = "";
        this.options = ["", "", "", "", ""];
        this.mark = 0;
        this.correctAnswer = "";
      },
      submit() {
        // Perform submit logic here
        // Example: emit a "submit" event to be handled by the parent component
        this.$emit("submit", {
          question: this.question,
          options: this.options,
          mark: this.mark,
          correctAnswer: this.correctAnswer,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .question-maker {
    /* Styles for the question maker component */
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .question-field,
  .mark-field,
  .correct-answer-field,
  .options-field {
    /* Styles for the input fields */
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: none;
  }
  
  textarea {
    height: 60px;
  }

  #correctness{
    width: 20px;
    height: 20px;
    background-color: violet;
  }
  
  textarea,
  input {
    /* Styles for the textarea */
    width: 100%;
    resize: none;
    box-shadow: none;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #f1f1f1;
    font-family: inherit;
    font-size: inherit;
  }
  
  .options-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Add this line to center the options */
    gap: 20px;
  }

  button{
    height: 45px;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #f1f1f1;
    color: white;
    border: none;
    box-shadow: none;
  }

  .destruction{
    background-color: rgb(201, 11, 11);
  }

  .success{
  background-color: #30a2ff;
  }
  
  .buttons {
    /* Styles for the buttons section */
    margin-top: 20px; /* Add margin-top to separate the buttons from other items */
    display: flex;
    gap: 10px;
  }
  
  label {
    /* Styles for the labels */
    width: 100px;
    text-align: right;
  }
  </style>
  