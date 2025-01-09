//script.js
const questions=[
    {
        question:"What is the capital of France?",
        answers:["Berlin", "Madrid", "Paris", "Rome"],
        correct:2,
    },
    {
        question:"What is 2+2?",
        answers:["3", "4", "5", "6"],
        correct:1,
    },
    {
        question:"Which programming language is known as the web's backbone?",
        answers:["Python", "Java","JavaScript","C#"],
        correct:2,
    },


];

let currentQuestionIndex=0;
let score=0;

const questionText=document.getElementById("question-text");
const answersContainer=document.getElementById("answers");
const nextButton=document.getElementById("next-button");
const scoreDisplay=document.getElementById("score");

function loadQuestion(){
    const currentQuestion=questions[currentQuestionIndex];
    questionText.textContent=currentQuestion.question;
    answersContainer.innerHTML="";

    currentQuestion.answers.forEach((answer, index) => {
        const button=document.createElement("button");
        button.textContent=answer;
        button.addEventListener("click", () => checkAnswer(index));
        answersContainer.appendChild(button);
        console.log("test1");
    });
}

function checkAnswer(selectedIndex){
    const correctIndex=questions[currentQuestionIndex].correct;
    if(selectedIndex === correctIndex){
        score++;
        scoreDisplay.textContent=score;
    }

    Array.from(answersContainer.children).forEach((button, index) =>{
        button.disabled=true;
        if(index=== correctIndex){
            button.style.backgroundColor="green";
        }else if(index===selectedIndex){
            button.style.backgroundColor="red";
        }
    });

    nextButton.style.display="block";
    console.log("testing");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        loadQuestion();
        nextButton.style.display="none";
    }else{
        questionText.textContent="Quiz Complete";
        answersContainer.innerHTML=`Your final score is ${score}/${questions.length}.`;
        nextButton.style.display="none";
    }
});
loadQuestion();