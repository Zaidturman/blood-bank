 // Add some JavaScript to handle the form submission
 const form = document.getElementById('login-form');
 let createAccount=document.querySelector("[type=button]");
 let back=document.getElementById("back");
 let inputError=document.getElementById("inputError");


 let username=document.getElementById("username");
 let password=document.getElementById("password");

 let storedData = JSON.parse(localStorage.getItem("users"));

username.addEventListener('change',function(){
 console.log(username.value);
 usernamevalue=username.value;
})
password.addEventListener('change',function(){
 console.log(password.value);
 passwordvalue=password.value;
})

 form.addEventListener('submit', (event) => {
   event.preventDefault(); // Prevent the form from being submitted
   for(let i=0;i<storedData.length;i++){
     
   if(storedData[i].usern === username.value && storedData[i].pass ===password.value ){
     
     window.location.href = "../profile/profile.html";
   }else {
     inputError.innerText="the input is undifind";
   }
   }

 }
 );





 createAccount.onclick=function(){
     window.location.href = '../createAccount/createAccount.html';
     console.log("click")
 }
 back.onclick=function(){
     window.location.href = '../index.html';
 }

 let select=document.getElementById("select");
 let result=document.getElementById("result");
 select.onchange=()=>{
result.innerText=select.value;
 }