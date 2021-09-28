var sideA=document.querySelector("#side-a")
var sideB=document.querySelector('#side-b')
var calculate=document.querySelector('#calculate-btn')
var message=document.querySelector('#message')
function calculateHypotenuse(){
    var val1=sideA.value;
    var val2=sideB.value;
    console.log(val1,"val2",val2);
    if(val1=="" || val2==""){
        message.innerHTML="Please Enter both input values"
        return
    }
    if(val1<=0 || val2<=0){
        message.innerHTML="Please enter value greater than 0";
        return
    }
    ans=(Math.sqrt((val1*val1)+(val2*val2))).toFixed(2);
    console.log(ans);
    ans=`The hypotenuse of the side A(${val1}) and B(${val2}) is ${ans} `;
    message.innerHTML=ans;
}


calculate.addEventListener("click",calculateHypotenuse);
