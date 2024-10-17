 const myText = document.getElementById('myText').value;
 const submit = document.getElementById('mySubmit');
 const resultElement=  document.getElementById('resultElement'); 
 
 
submit.addEventListener('click',function(){
  checkAge()
})

function checkAge(age) {
    if(age>=18){
        console.log("You are old enough");
    } else {
        console.log("you are not old enough");
    }
}
