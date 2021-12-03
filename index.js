var readlineSync=require('readline-sync');
console.log("This game will test your knowledge about me.")
console.log("----------------------------")
console.log("Each right answer will give you +1")
console.log("------------------------")
console.log("How to play\n")
console.log("Answer with a,b,c,d")
console.log("------------------------")
var score=0;
function quiz(question,answer){
   var userAnswer=readlineSync.question(question)
   if(userAnswer===answer){
      console.log("The answer is right")
      score++;
   }
   else{
     console.log("The answer is wrong")
   }
   console.log("Your score is:"+score)
   console.log("----------------\n")
}
var questions=[
  firstQuestion={
    question:"Which state I belong to ?\na.UP\nb.Haryana\nc.Bihar\nd.Madhya Pradesh\nYour answer:",
    answer:"a"
    
  },
  secondQuestion={
    question:"What is my favourite destination?\na.kasol\nb.kashmir\nc.Goa\nd.Ladakh\nYour answer:",
    answer:"c"
    
  },
  thirdQuestion={
    question:"Which is my favourite non-fiction?\na.The notebook\nb.The kite runner\nc.The girl in the train\nd.Thousand splendid suns\nYour answer:",
    answer:"b"
    
  },
  fourthQuestion={
    question:"Which is my homeplace  ?\na.Banaras\nb.Mirzapur\nc.bhadohi\nd.allahabad\nYour answer:",
    answer:"a"
    
  },
  fifthQuestion={
    question:"What is my favourite sport name?\na.Hockey\nb.Football\nc.Cricket\nd.Kabaddi\nYour answer:",
    answer:"a"
    
  },
  sixthQuestion={
    question:"What is my favourite athlete/sportperson?\na.Virat kohli\nb.Rohit sharma\nc.M.S.Dhoni\nd.Bumrah\nYour answer:",
    answer:"a"
    
  },
  seventhQuestion={
    question:"Which is my favourite series?\na.The strangers\nb.Game of Thrones\nc.Peaky Blinder\nd.\nYour answer:",
    answer:"a"
    
  },
  eighthQuestion={
    question:"Which is my favourite fastfood?\na.Momo\nb.Pizza\nc.Noodles\nd.Burger\nYour answer:",
    answer:"b"
    
  },
  ninthQuestion={
    question:"Which is my favourite subject?\na. Maths\nb.Physics\nc. Chemistry\nd.English\nYour answer:",
    answer:"a"
    
  },
  tenthQuestion={
    question:"Who is my favourite personality?\na.Tanay Pratap\nb.Kunal shah\nc.Bhavish Agrawal\nd.Ritesh Agarwal\nYour answer:",
    answer:"a"
    
  }
]
for(i=0;i<questions.length;i++){
   var currentQuestion=questions[i]
   quiz(currentQuestion.question,currentQuestion.answer)
}
var highscores=[
  Ishant={
    score:"10"
  },
  yogesh={
    score:"10"
  },
  rajat={
    score:"10"
  }
]
console.log("Your final score is:"+score)
console.log("\n----------------------\n")
console.log("people who know me the most:")
console.log("Ishant:" +Ishant.score)
console.log("Yogesh:" +yogesh.score)
console.log("rajat:" +rajat.score)
console.log("-------------------")
if(score==10){
  console.log("OHH0 Our vibe would be same.Lets meet\n")

}


