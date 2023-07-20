<template>
  <TopBar />
  <div class="app queheight">
    <h1 class="queheight">Multiple Choice Questions</h1>
    <div v-if="!showResults" class="queheight">
      <Question
        :question="currentQuestion"
        :selectedOptions="selectedOptions[currentQuestionIndex]"
        :questionIndex="currentQuestionIndex"
        @answer="handleOptionChange"
      />
      <button v-if="!isLastQuestion" @click="nextQuestion">Next</button>
      <button v-else @click="submitAnswers">Submit</button>
    </div>
    <div v-else>
      <h2>Results</h2>
      <p v-for="(result, index) in results" :key="index">
        Question {{ index + 1 }}: {{ result }}
      </p>
      <button class="restartquixbutton" @click="restartQuiz">
        Restart Quiz
      </button>
      <h1>Marks {{ totalMarks }}</h1>
    </div>
  </div>
</template>
  
  <script>
import Question from "@/components/Questions";
import TopBar from "@/components/TopBar";

export default {
  components: {
    Question,
    TopBar,
  },
  data() {
    return {
      questions: [
        {
          text: "What is the capital of France?",
          options: ["London", "Berlin", "Paris", "Madrid"],
          correctAnswer: "Paris",
        },
        {
          text: "Which planet is known as the Red Planet?",
          options: ["Venus", "Mars", "Jupiter", "Neptune"],
          correctAnswer: "Mars",
        },
        {
          text: "Which show electrical conductance?",
          options: ["Sodium", "Diamond", "Potassium", "Graphite"],
          correctAnswer: "Graphite",
        },
      ],
      currentQuestionIndex: 0,
      selectedOptions: [], // Array to store selected options for each question
      results: [],
      currentMark: 0,
      totalMarks: 0,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1;
    },
    showResults() {
      return this.results.length > 0;
    },
    calculateTotalMark() {
      return this.totalMarks;
    },
  },
  // created() {
  // Call the method to calculate total marks and update the data property

  // },
  methods: {
    handleOptionChange(option) {
      this.selectedOptions[this.currentQuestionIndex] = option.target.value;
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.selectedOptions[this.currentQuestionIndex] = null; // Reset the selected option for the new question
    },
    submitAnswers() {
      this.calculateResults();
      this.calculateTotalMarks();
    },
    calculateResults() {
      this.results = this.questions.map((question, index) => {
        return this.selectedOptions[index] ===
          this.questions[index].correctAnswer
          ? "Correct"
          : "Incorrect";
      });
    },
    calculateTotalMarks() {
      // // const marks = [80, 90, 70, 85];
      // const marks = this.questions.map((index) => {
      //   if( this.selectedOptions[index] === 'Paris'){
      //     3;
      //   }
      // });
      // console.log(marks);
      // return marks;
      // // // Calculate the total marks
      // // this.totalMarks = marks.reduce((total, mark) => total + mark, 0);

      console.log(this.questions[0].correctAnswer);
      const marks = this.questions.map((question, index) => {
        // Assuming each question has a correct answer stored in `question.correctAnswer`
        const correctAnswer = this.$data.questions[index].correctAnswer;

        // Check if the selected option is equal to the correct answer
        if (this.selectedOptions[index] === correctAnswer) {
          return 1; // Correct answer gets 1 mark
        } else {
          return 0; // Incorrect answer gets 0 mark
        }
      });
      // Calculate the total marks using reduce
      const totalMarks = marks.reduce((total, mark) => total + mark, 0);
      this.totalMarks = totalMarks;
    },
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.selectedOptions = [];
      this.results = [];
    },
  },
};
</script>
  
  <style>
/* Add styling as per your requirement */
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  height: 70px;
}

h1 {
  text-align: center;
}

.question {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

button {
  display: block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  width: 80px;
}

button:hover {
  background-color: #0056b3;
}

/* Question.vue */
.question {
  background-color: #f9f9f9;
}

/* Results section */
h2 {
  margin-top: 40px;
  text-align: center;
}

p {
  margin-bottom: 10px;
}

/* Restart button */
button {
  margin-top: 20px;
  background-color: #075da3;
}

button:hover {
  background-color: #30a2ff;
}

input[type="radio"] {
  align-self: center; /* Center the radio button within each option */
  margin-right: 8px; /* Add spacing between radio button and option text */
}

label {
  display: flex;
  align-items: center; /* This will vertically align the radio button with the option text */
}

.options {
  display: flex;
  flex-direction: column; /* Change to "row" if you want options in a row */
  align-items: center; /* Center the options horizontally */
  gap: 8px; /* Adjust the gap between radio buttons and options */
}
.queheight {
  width: 700px;
}

.restartquixbutton {
  text-align: center;
  display: flex;
  margin: auto;
  width: 90px;
}
</style>

  
  
  