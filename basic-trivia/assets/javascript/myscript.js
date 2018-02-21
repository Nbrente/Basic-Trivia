

var myQuestions = [
  {
    question: "What is 10/2?",
    answers: {
      a: '3',
      b: '5',
      c: '115',
      d: 'batman'
    },
    correctAnswer: 'b'
  },
  {
    question: "What is 30/3?",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    correctAnswer: 'c'
  },
  {
    question: "Who is Batman?",
    answers: {
      a: 'Damian Wayne',
      b: 'Clark Kent',
      c: 'Bucky Barnes',
      d: 'Bruce Wayne'
    },
    correctAnswer: 'd'
  },
  {
    question: "Who is the Black Panther?",
    answers: {
      a: "T'Challa",
      b: 'Shuri',
      c: "N'Jobu",
      d: "W'Kabi"
    },
    correctAnswer: 'a'
  },
  {
    question: "Who is Captain America?",
    answers: {
      a: 'Nick Fury',
      b: 'Sam Wilson',
      c: 'Steve Rogers',
      d: 'Jasper Sitwell'
    },
    correctAnswer: 'c'
  },
  {
    question: "Who is Scarlett Witch?",
    answers: {
      a: "Quicksilver's Sister",
      b: "Vision's Daughter",
      c: "Captain America's S.O.",
      d: 'Batwoman'
    },
    correctAnswer: 'a'
  },
  {
    question: "Ultron used to be which charracter?",
    answers: {
      a: 'F.R.I.D.A.Y.',
      b: 'J.A.R.V.I.S.',
      c: 'O.R.D.E.R.',
      d: 'S.H.E.I.L.D.'
    },
    correctAnswer: 'b'
  },
  {
    question: "Captain got his powers from what?",
    answers: {
      a: 'The Ultra Serum?',
      b: 'The Mega Serum?',
      c: 'The Super Serum?',
      d: 'The X Serum?'
    },
    correctAnswer: 'c'
  },
  {
    question: "Bucky Barnes was mind controlled by whom?",
    answers: {
      a: 'The HYDRA',
      b: 'The CIA',
      c: 'The Nazi',
      d: 'The Skrulls'
    },
    correctAnswer: 'a'
  },
  {
    question: "Ironman is a character from",
    answers: {
      a: 'DC',
      b: 'Darkhorse',
      c: 'Marvel',
      d: 'Dragonball Z'
    },
    correctAnswer: 'c'
  },
];
var time = 60;
var isTimeUp = false;
var correctAnswers = 0;
var timerContainer = document.getElementById('timer');
var quizContainer = document.getElementById('quiz'); //set the containers for out ouputs
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
  count();
  function showQuestions(questions, quizContainer) {

    var output = [];                                 // we'll need a place to store the output and the answer choices
    var answers;
    var isTimeUp = false;


    for (var i = 0; i < questions.length; i++) {     // for each question...
      answers = [];                                    //resets the array of answer per loop
      for (letter in questions[i].answers) {         //for each letter in answers...(in hard homework loop 4 buttons with and assign value to letter)
        answers.push(                                  // for easy homework im using radio buttons BUT on hard using 4 unique buttons
          '<label>'
          + '<input type="radio" name="question' + i + '" value="' + letter + '">'
          + letter + ': '
          + questions[i].answers[letter]
          + '</label>'
          + '<br>'
        );
      }
      output.push(                                                  //output.push(x) "pushes" things into x into output
        '<div class="question">' + questions[i].question + '</div>'//creates div with question
        + '<div class="answers">' + answers.join('') + '</div>'    // creates div with all answers as radio buttons
      );
    }
    quizContainer.innerHTML = output.join('');                     //after pushing everything into output array
  }

  function showResults(questions, quizContainer, resultsContainer) {


    var answerContainers = quizContainer.querySelectorAll('.answers');// Collects all of the class answer containers


    var userAnswer = '';                                             // keep track of user's answers
    var numCorrect = 0;


    for (var i = 0; i < questions.length; i++) {                      // for each question...

      // find selected answer via check
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
      ///--- user check & styling
      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = 'lightgreen';
      }

      else {
        answerContainers[i].style.color = 'red';
      }
    } resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    ///---

  }
  function count() {

    setTimeout(function () {
      isTimeUp = true;
      stopClock();
      showResults(questions, quizContainer, resultsContainer);
    }, 61000);
    var clock = setInterval(function () {
      time--;
      $("#timer").text("Time left: " + time + " seconds");

    }, 1000); 
    function stopClock() {
      clearInterval(clock)
    }
  }


  showQuestions(questions, quizContainer);
  submitButton.onclick = function () {
    if (isTimeUp === true) {
      return false;
    } else {
      showResults(questions, quizContainer, resultsContainer);
      isTimeUp = true;
    }

  }

}
