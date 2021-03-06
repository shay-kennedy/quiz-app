$(document).ready(function() {
    // Question1 Prototype

    var Question = {
        question: "What is the capital of Arizona?",
        choices: ["Tucson", "Phoenix", "Flagstaff", "Payson"],
        correctAnswer: 1,
        getCorrectChoice: function() {
            return this.choices[this.correctAnswer];
        }
    }

    // Question objects inherited from Question1 Prototype

    var question1 = Object.create(Question);
    question1.question = "What is the capital of Arizona?";
    question1.choices = ["Tucson", "Phoenix", "Flagstaff", "Payson"];
    question1.correctAnswer = 1;

    var question2 = Object.create(Question);
    question2.question = "What is the capital of Ohio?";
    question2.choices = ["Cleveland", "Dayton", "Columbus", "Cincinnati"];
    question2.correctAnswer = 2;

    var question3 = Object.create(Question);
    question3.question = "What is the capital of Florida?";
    question3.choices = ["Tallahassee", "Orlando", "Tampa", "Jacksonville"];
    question3.correctAnswer = 0;

    var question4 = Object.create(Question);
    question4.question = "What is the capital of California?";
    question4.choices = ["San Diego", "San Francisco", "Sacramento", "Palm Springs"];
    question4.correctAnswer = 2;

    var question5 = Object.create(Question);
    question5.question = "What is the capital of Delaware?";
    question5.choices = ["Pierre", "Austin", "New York", "Dover"];
    question5.correctAnswer = 3;

    var question6 = Object.create(Question);
    question6.question = "What is the capital of Colorado?";
    question6.choices = ["Denver", "Aspin", "Breckenridge", "Colorado Springs"];
    question6.correctAnswer = 0;

    var question7 = Object.create(Question);
    question7.question = "What is the capital of Oregon?";
    question7.choices = ["Richmond", "Portland", "Charleston", "Jacksonville"];
    question7.correctAnswer = 1;

    var question8 = Object.create(Question);
    question8.question = "What is the capital of Indiana?";
    question8.choices = ["Indianapolis", "Springfield", "Prescott", "Park City"];
    question8.correctAnswer = 0;

    var question9 = Object.create(Question);
    question9.question = "What is the capital of Alabama?";
    question9.choices = ["Shelby", "Huntsville", "Montgomery", "Atlanta"];
    question9.correctAnswer = 2;

    var question10 = Object.create(Question);
    question10.question = "What is the capital of Utah?";
    question10.choices = ["Park City", "Provo", "Salt Lake City", "Nashville"];
    question10.correctAnswer = 2;

    // List of questions object used to generate random questions for quiz
    // "liar variables"
    var listOfQuestions = [question1, question2, question3, question4, question5,
        question6, question7, question8, question9, question10
    ]


    // Grabs Random Question

    var randomize = function() {
            return listOfQuestions[Math.floor(Math.random() * listOfQuestions.length)];
        }
        // Check used for object questions
        // console.log(question2.getCorrectChoice());

    //var q1CorrectAnswer = Question1.getCorrectChoice();
    //console.log(q1CorrectAnswer);
    var counter = 0;
    var pageLoadStart = function(callQuestion) {
        // var callQuestion = randomize();
        $('.quizQuestion').text(callQuestion.question);
        $('label[for=choice1]').text(callQuestion.choices[0]);
        $('label[for=choice2]').text(callQuestion.choices[1]);
        $('label[for=choice3]').text(callQuestion.choices[2]);
        $('label[for=choice4]').text(callQuestion.choices[3]);
        $('.count').text((counter + 1 + " "));
        $('.correct').text(" 5 ");
    }
    var callQuestion = listOfQuestions[counter]
    pageLoadStart(callQuestion);

    $('#submitButton').click(function() {
        if (counter < listOfQuestions.length) {
            counter++;
            pageLoadStart(listOfQuestions[counter]);
        }

        // alert("It worked");

        // while (counter < 6) {
        // pageLoadStart();
        // // counter++;
        // console.log(randomize());
        // }
    })
})
