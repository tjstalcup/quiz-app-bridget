var questions = [
	{
		title: 'What color is the sky?',
		answers: ['Green','Blue','Red','Purple'],
		correct: 1
	},{
		title: 'What color is Barney the Dinosaur?',
		answers: ['Green','Blue','Red','Purple'],
		correct: 3
	},{
		title: 'What color is the fire truck?',
		answers: ['Green','Blue','Red','Purple'],
		correct: 2
	},{
		title: 'What color is the grass?',
		answers: ['Green','Blue','Red','Purple'],
		correct: 0
	},
];

var score = 0;
var curQuestion = 0;


$(document).ready(function(){
	displayQuestion();
	$('.next').click(function(){
		var guess = $('input[name="guess"]:checked').val();
		checkAnswer(guess);
	});

	$('.new-game').click(function(){
		newGame();
	});
});

function displayQuestion(){
	if(curQuestion < questions.length){
		var question = questions[curQuestion];
		$('.question').text(question.title);
		$('.answers').html('');
		for (var i = 0; i < question.answers.length; i++) {
			$('.answers').append('<li><input type="radio" name="guess" value="'+i+'" id="'+i+'"/><label for="'+i+'">'+question.answers[i]+'</label></li>');
		}
	} else {
		showSummary();
	}
}

function checkAnswer(guess){
	var question = questions[curQuestion];
	if(guess == question.correct){
		score++;
	}
	curQuestion++;
	displayQuestion();
}

function showSummary(){
	$('main').hide();
	$('.summary h3').text('You got '+score+' of '+questions.length+' correct');
	$('.summary').show();
}

function newGame(){
	$('main').show();
	$('.summary').hide();
	score = 0;
	curQuestion = 0;
	displayQuestion();
}