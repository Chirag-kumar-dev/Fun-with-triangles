var sideA=document.querySelector("#side-a")
var sideB=document.querySelector('#side-b')
var calculate=document.querySelector('#calculate-btn')
var message=document.querySelector('#message')
function calculateHypotenuse(){
    var val1=sideA.value;
    var val2=sideB.value;

    ans=Math.sqrt((val1*val1)+(val2*val2));
    console.log(ans);
    ans=`The hypotenuse of the side A(${val1}) and B(${val2}) is ${ans} `;
    message.innerHTML=ans;
}


calculate.addEventListener("click",calculateHypotenuse);
