

var panel = $('#quiz-area');

$(document).on('click', '#start', function(e) {
    game.start();
});

$(document).on('click', '#done', function(e) {
    game.done();
});

var questions = [{
    question: "1 . Who directed the Star Wars Movies?",
    answers: ["Jules Verne", "George Lucas", "J K Rowling", "Charles Dickens"],
    correctAnswer: "George Lucas"
  }, {
    question: "2 . How many Death Stars were Built?",
    answers: ["One", "Two", "Three", "Four"],
    correctAnswer: "Two"
  }, {
    question: "3 . Luke Skywalker is the son of who?",
    answers: ["Anakin and Padme", "Han and Leai", "Chewbacca", "Han Solo"],
    correctAnswer: "Anakin and Padme"
  }, {
    question: "4 . Who said the following: I am your Father!?",
    answers: ["Luke Skywalker", "Darth Vader", "Han Solo", "Leia"],
    correctAnswer: "Darth Vader"
  }, {
    question: "5 . What is a weapon of the Jedi",
    answers: ["Lightsaber", "Toothpick", "flashligh", "baseball bat"],
    correctAnswer: "Lightsaber"
  }, {
    question:  "6 . Who is the Captain of the Millenium Falcon?",
    answers: ["Hans Solo", "Leia", "Boba Fett", "Jabba the hut"],
    correctAnswer: "Hans Solo"
  }];
  
  var game = {
    correct:0,
    incorrect:0,
    counter:90,
    countdown: function(){
      game.counter--;
      $('#counter-number').html(game.counter);
  
      if (game.counter === 0){
        console.log('TIME UP');
        game.done();
      }
    },
    start: function() {
      timer = setInterval(game.countdown, 1000);
  
      $('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">90</span> Seconds</h2>');
      $('#start').remove();
  
  
      for (var i = 0; i < questions.length; i++) {
        panel.append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
          panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
        }
      }
  
      panel.append('<button id="done">Done</button>');
    },
    done: function() {
  
  
      $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() == questions[0].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-1']:checked"), function() {
          if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() == questions[3].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() == questions[4].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-5']:checked"), function() {
        if ($(this).val() == questions[5].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
  
      this.result();
    },
      result: function() {
  
      clearInterval(timer);
  
      $('#subcontainer h2').remove();
      panel.html('<h2>All Done!</h2>');
      panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
      panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
      panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
    }
  
  };