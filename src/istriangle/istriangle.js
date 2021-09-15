var angle1=document.querySelector("#angle-1");
var angle2=document.querySelector("#angle-2");
var angle3=document.querySelector("#angle-3");
var message=document.querySelector("#message");

var isTriangleBtn=document.querySelector("#triangle-btn");
console.log(angle1);
console.log(message.innerText)
function isTriangle(){
    val1=Number(angle1.value);
    val2=Number(angle2.value);
    val3=Number(angle3.value);
    
    if((val1 || val2 || val3)<=0){
        message.innerHTML="All Angle should be greater than 0";
        return 
    }
    else if(val1+val2+val3===180){
        message.innerHTML="Yay,the angles form a triangle";
        console.log(message.innerText)
        console.log(message.innerHTML)
    }else{
        message.innerHTML="Oh Oh! The angle doesn't form a triangle";
    }
}



isTriangleBtn.addEventListener("click",isTriangle);