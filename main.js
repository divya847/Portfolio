let menuIcon=document.querySelector('#menu-icons');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}
function sendmail(){
   var params={
    from_name:document.getElementById("fullName").value,
    email_id:document.getElementById("email_id").value,
    message:document.getElementById("message").value,
   }
   emailjs.send("service_os0d6pl" ,"template_7e92ekr",params).then(function (res){
     alert("success!"+res.status);
   })
  // console.log("sent");
}

// scroll section active link
// let section=document.querySelectorAll