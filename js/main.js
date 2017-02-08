var questions = [ 
	{
		question: "Claude Monet was born in Paris, France.",
		answer: "T"
	},
	{
		question: "Monet was baptized Catholic but he went on to become an atheist.",
		answer: "T"
	},
	{
		question: "His painting, Sunrise, gave name to the Impressionist movement",
		answer: "T"
	},
	{
		question: "Monet never served in the military",
		answer: "F"
	},
	{
		question: "Among all Impressionists, Monet drew the largest number of self-portraits",
		answer: "F"
	},
	{
		question: "The Woman in the Green Dress was painted after Camille, Monet's first wife, passed away. ",
		answer: "F"
	},
	{
		question: "Monet's series of the ''Nymphea'' or Water Lilies consists of approximately 250 oil paintings which were painted by Monet during the last thirty years of his life",
		answer: "T"
	},
	{
		question: "Monet once wrote: ''My only merit lies in having painted directly in front of nature, seeking to render my impressions of the most fleeting effects.'' ",
		answer: "T"
	},
	{
		question: "The second wife of Monet was Japanese",
		answer: "F"
	},
	{
		question: "Monet died of liver cancer",
		answer: "F"
	}

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}








