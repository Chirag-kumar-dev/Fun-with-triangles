var side1=document.querySelector("#side-1");
var side2=document.querySelector("#side-2");
var side3=document.querySelector("#side-3");
var message=document.querySelector("#message");
var calculateBtn=document.querySelector("#calculate-btn");

function calculateArea(){
    val1=Number(side1.value);
    val2=Number(side2.value);
    val3=Number(side3.value);
    console.log("val1",val1);
    if ((val1 || val2 || val3)==""){
        return
    }
    if((val1 || val2 || val3)<=0){
        message.innerHTML="Enter valid side lengths such that each side lengths should be greater than 0";
        return 
    }
    if(val1+val2>val3 && val2+val3>val1 && val1+val3>val2){
    var s=0;
    s=(val1+val2+val3)/2;
    console.log(s);
    var Area=0;
    Area=Math.sqrt(s*(s-val1)*(s-val2)*(s-val3)).toFixed(4);
    console.log(Area)
    message.innerHTML=`Area of a triangle using heron's formula is ${Area}`;
    console.log(message)
    }else{
        message.innerHTML='Enter valid side lengths such that each side lengths should be greater than 0';    }
}
calculateBtn.addEventListener("click",calculateArea);