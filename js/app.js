$(document).ready(function() {
// Question1 Prototype

var Question1 = {
	question: "What is the capital of Arizona?",
	choices: ["Tucson", "Phoenix", "Flagstaff", "Payson"],
	correctAnswer: 1,
	getCorrectChoice: function() {
	  return this.choices[this.correctAnswer];
	}
}

// Question objects inherited from Question1 Prototype

var question2 = Object.create(Question1);
question2.question = "What is the capital of Ohio";
question2.choices = ["Cleveland", "Dayton", "Columbus", "Cincinnati"];
question2.correctAnswer = 2;

var question3 = Object.create(Question1);
question3.question = "What is the capital of Florida";
question3.choices = ["Tallahassee", "Orlando", "Tampa", "Jacksonville"];
question3.correctAnswer = 0;

var question4 = Object.create(Question1);
question4.question = "What is the capital of California";
question4.choices = ["San Diego", "San Francisco", "Sacramento", "Palm Springs"];
question4.correctAnswer = 2;

var question5 = Object.create(Question1);
question5.question = "What is the capital of Delaware";
question5.choices = ["Pierre", "Austin", "New York", "Dover"];
question5.correctAnswer = 3;

var question6 = Object.create(Question1);
question6.question = "What is the capital of Colorado";
question6.choices = ["Denver", "Aspin", "Breckenridge", "Colorado Springs"];
question6.correctAnswer = 0;

var question7 = Object.create(Question1);
question7.question = "What is the capital of Oregon";
question7.choices = ["Richmond", "Portland", "Charleston", "Jacksonville"];
question7.correctAnswer = 1;

var question8 = Object.create(Question1);
question8.question = "What is the capital of Indiana";
question8.choices = ["Indianapolis", "Springfield", "Prescott", "Park City"];
question8.correctAnswer = 0;

var question9 = Object.create(Question1);
question9.question = "What is the capital of Alabama";
question9.choices = ["Shelby", "Huntsville", "Montgomery", "Atlanta"];
question9.correctAnswer = 0;

var question10 = Object.create(Question1);
question10.question = "What is the capital of Utah";
question10.choices = ["Park City", "Provo", "Salt Lake City", "Nashville"];
question10.correctAnswer = 0;

// List of questions object used to generate random questions for quiz

var ListOfQuestions = {
	questionList: [Question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
}

// Grabs Random Question

var randomize = function() {
  var randomIndex = ListOfQuestions.questionList[Math.floor(Math.random()*ListOfQuestions.questionList.length)];
  console.log(randomIndex);
}
// Check used for object questions
	// console.log(question2.getCorrectChoice());

//var q1CorrectAnswer = Question1.getCorrectChoice();
//console.log(q1CorrectAnswer);
randomize();
$('.quizQuestion').text("test");
$('label[for=choice1]').text(" Answer 1 Test");
$('label[for=choice2]').text(" Answer 2 Test");
$('label[for=choice3]').text(" Answer 3 Test");
$('label[for=choice4]').text(" Answer 4 Test");
$('.count').text(" 1 ");
$('.correct').text(" 5 ")


})
