 const myText = document.getElementById('myText').value;
 const submit = document.getElementById('mySubmit');
 const resultElement=  document.getElementById('resultElement'); 
 
 
submit.addEventListener('click',function(){
  checkAge()
})

function checkAge(age) {
    if (age>=18) {
        return "You are old enough.";
    } else {
        return "You are not old enough.";
    }
}
