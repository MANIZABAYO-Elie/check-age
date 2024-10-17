 const myText = document.getElementById('myText').value;
 const submit = document.getElementById('mySubmit');
 const resultElement=  document.getElementById('resultElement'); 
 
 
submit.addEventListener('click',function(){
  checkAge()
})

checkAge = function(){
    if(age>=18){
        console.log('you are allowed to vote')
    
    }else{
        console.log('you are not allowed to vote');
    }
}
