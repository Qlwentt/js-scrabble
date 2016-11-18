var Scrabble = function() {};
var ScoreChart= {};

//set up stuff to make a score chart

let onePoint= ["A","E","I","O", "U", "L", "N", "R", "S", "T"];
let twoPoints=["D", "G"];
let threePoints=["B","C","M","P"];
let fourPoints=["F", "H", "V", "W", "Y"];
ScoreChart["K"]=5;
// let fivePoints=["K"];
let eightPoints=["J", "X"];
let tenPoints=["Q", "Z"];

// let allOfThem=[
// 	{onePoint: 1},
// 	{twoPoints: 2},
// 	{threePoints: 3},
// 	{fourPoints: 4},
// 	{fivePoints: 5},
// 	{eightPoints: 8},
// 	{tenPoints: 10}
// 	]


for (let element of onePoint){
	ScoreChart[element]=1;
}
for (let element of twoPoints){
	ScoreChart[element]=2;
}
for (let element of threePoints){
	ScoreChart[element]=3;
}
for (let element of fourPoints){
	ScoreChart[element]=4;
}
for (let element of eightPoints){
	ScoreChart[element]=8;
}
for (let element of tenPoints){
	ScoreChart[element]=10;
}

// YOUR CODE HERE
Scrabble.prototype = {
  say_hello: function(){return 'hello world!'},

  score: function(word){
  	word=word.toUpperCase();
  	var total=0;
  	word.split("").forEach(function(letter){
  		total+=ScoreChart[letter];
  	});
  	if (word.length==7){
  		total+=50
  	}
  	return total;
  }, 
  highestScorefrom: function(wordArray){
  	var self=this;
  	var scores = wordArray.map(function(thisWord){
  		return self.score(thisWord)
  	});
  	// return scores;
  	var max=0;
  	var max_index;

  	scores.forEach(function(score,i){
  		if (score>max){
  			max=score;
  			max_index=i;
  		}else if(score==max && wordArray[i].length<wordArray[max_index].length){
  			max=score;
  			max_index=i;
  		}
  	});
  	return wordArray[max_index];
  }
};

module.exports = Scrabble;
