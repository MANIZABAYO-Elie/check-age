 const myText = document.getElementById('myText').value;
 const submit = document.getElementById('mySubmit');
 const resultElement=  document.getElementById('resultElement'); 
 
 
submit.addEventListener('click',function(){
  checkAge()
})
age =myText.value;
age =Number(age);
function checkAge(age) {
    if(age===""){
       resultElement.innerHTML = "please enter a valid age"
    }
   else if(age>=18){
        console.log("You are old enough");
        resultElement.innerHTML = "you are  old enough"
    } else if(age<18){
        console.log("you are not old enough");
        resultElement.innerHTML = "you are not old enough"
    }else{
        console.log("");
        resultElement.innerHTML = "please check your age"  
    }
}
