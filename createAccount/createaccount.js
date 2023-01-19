 // Add some JavaScript to handle the form submission
 const form = document.getElementById('create-account-form');
 const inputusername = document.getElementById('username');
 const inputpassword = document.getElementById('password');
 const inputemail = document.getElementById('email');
 const createbtn = document.getElementById('create');
 let back=document.querySelector("[type=button]");





 let users = [];

 // chick if theres users in local storage

 if(localStorage.getItem("users")){
    users=JSON.parse(localStorage.getItem("users"));
 }

 createbtn.onclick=()=>{

    if(inputusername.value!==""&&inputpassword.value!==""&&inputemail.value!==""){

       
        addUsers(inputusername.value,inputpassword.value,inputemail.value)
       
      
    
    }
}
function addUsers(u,p,e){
    const user ={
        id: Date.now(),
        usern: u,
        pass:p,
        email:e,
        completed: false,
    }
    users.push(user);
    console.log(users);
        // Convert the array to a string
        
     addDataToLocalStorageFrom(users);


}
 function addDataToLocalStorageFrom(users) {
    window.localStorage.setItem("users", JSON.stringify(users));
  } 





 back.onclick=function(){
     window.location.href = '../login/loginPage.html';
 };