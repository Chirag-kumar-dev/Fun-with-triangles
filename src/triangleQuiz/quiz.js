const quizform=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#submit-answers-btn");
const message=document.querySelector("#message");

const correctAns=["90°",
"Acute",
"Equilateral",
"2 congruent sides",
"180 degrees",
"100°",
"30°",
"a + b + c",
"no",
"45°",];

function calculateNum(){
    const formResults=new FormData(quizform)
    score=0;
    index=0;
    for(let value of formResults.values()){
        
        if(value===correctAns[index]){
            console.log(value)
            score+=1;
        }
        index+=1;
    }
    message.innerHTML="The score is" +score;
}


submitBtn.addEventListener("click",calculateNum);