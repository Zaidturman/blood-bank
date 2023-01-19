
      // اعطاء التنسيق للهيدر بحيث يتغير لونه عند النزول للاسفل  
      window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
 
 
 
    // استدعاء الازرار لاعطائها المهام 
 
      for(let i=1;i<=3;i++){
        let submitbtn = document.getElementById(`submit${i}`);
   submitbtn.onmouseenter =  () =>{
        submitbtn.classList.toggle("submit1");
    }
    submitbtn.onmouseleave =  () =>{
        submitbtn.classList.toggle("submit1");
    }
    submitbtn.onclick=()=>{
         Swal.fire(
            'Good job!',
            'the data is saved',
            'success'
            ); 
            console.log("clicked");
        };
    }

      


        let aside1 = document.getElementById("aside1");
        let aside2 = document.getElementById("aside2");
        let aside3 = document.getElementById("aside3");
        let aside4 = document.getElementById("aside4");
        let aside5 = document.getElementById("aside5");
        let aside6 = document.getElementById("aside6");



      
        aside1.onclick=function(){
            window.location.href = "asidElement/asideElement1.html";

        }
        aside1.onmouseenter=()=>{
            aside1.classList.toggle("asidebefore");

        }
        aside1.onmouseleave =  () =>{
            aside1.classList.toggle("asidebefore");
        }


        aside2.onclick=function(){
            window.location.href = "asidElement/asideElement2.html";
            
        }
        aside2.onmouseenter=()=>{
            aside2.classList.toggle("asidebefore");

        }
        aside2.onmouseleave =  () =>{
            aside2.classList.toggle("asidebefore");
        }


        aside3.onclick=function(){
            window.location.href = "asidElement/asideElement3.html";

        }
        aside3.onmouseenter=()=>{
            aside3.classList.toggle("asidebefore");

        }
        aside3.onmouseleave =  () =>{
            aside3.classList.toggle("asidebefore");
        }


        aside4.onclick=function(){
            window.location.href = "asidElement/asideElement4.html";

        }
        aside4.onmouseenter=()=>{
            aside4.classList.toggle("asidebefore");

        }
        aside4.onmouseleave =  () =>{
            aside4.classList.toggle("asidebefore");
        }
        aside5.onclick=function(){
            window.location.href = "asidElement/asideElement5.html";

        }
        aside5.onmouseenter=()=>{
            aside5.classList.toggle("asidebefore");

        }
        aside5.onmouseleave =  () =>{
            aside5.classList.toggle("asidebefore");
        }
        aside6.onclick=function(){
            window.location.href = "asidElement/asideElement6.html";

        }
        aside6.onmouseenter=()=>{
            aside6.classList.toggle("asidebefore");

        }
        aside6.onmouseleave =  () =>{
            aside6.classList.toggle("asidebefore");
        }
           


    // ظهور زر الرجوع للاعلى عند النزول للاسفل بالماوس
    let btn = document.getElementById("upbtn");

    window.onscroll = function () {
        if (window.scrollY >= 571) {

            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }

    }

    // اعطاء التنسيقات المناسبه لمهام التطبيق 
    for (let i = 1; i <= 5; i++) {

        let service = document.getElementById(`ser${i}`);

        service.onmouseenter = function () {
            service.classList.toggle(`services1`);
        }
        service.onmouseleave = function () {
            service.classList.toggle("services1");
        }
    }

// login btn and page

let loginBtn = document.getElementById("login-btn");

loginBtn.onclick= ()=>{
    window.location.href = 'login/loginPage.html';
}


   
