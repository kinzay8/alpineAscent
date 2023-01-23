
    
     
// function for_signup(){
// let name=document.getElementById("get_name").value;
// let email_s=document.getElementById("email_get").value;
// let pass=document.getElementById("passcode").value;

// if(!name){
//   document.getElementById("alert_n").style="color:red";
//   document.getElementById("alert_n").innerHTML="Please fill out this field!"
// }

// else if(name.length<=2){
//   document.getElementById("alert_n").style="color:red";
//   document.getElementById("alert_n").innerHTML="username must have 3 characters or more"
// }
// else{
//   document.getElementById("alert_n").innerHTML=" ";
//   window.location.href="./index.html";
//   // alert("Welcome"+" "+name)
// }


// if(!email_s){
//   document.getElementById("alert_em").style="color:red";
//   document.getElementById("alert_em").innerHTML="Please fill out this field!"
// }
// else{
//   document.getElementById("alert_em").innerHTML=" "
// }


// if(!pass){
//   document.getElementById("alert_pas").style="color:red";
//   document.getElementById("alert_pas").innerHTML="Please fill out this field!"
// }
// else if (pass.length<=5){
//   document.getElementById("alert_pas").style="color:red";
//   document.getElementById("alert_pas").innerHTML="passcode must have 5 characters or more"
// } 
// else {
//   document.getElementById("alert_pas").innerHTML=" "
// }
// }
function for_signup(){
  let name = document.getElementById("get_name").value;
  let re=/^[A-z a-z]{3,}$/
  let email = document.getElementById("email_get").value;
  let remail = /^[\w]+@[A-za-z]{4,5}[.]{1}[A-za-z]{3,}$/
  let pass = document.getElementById("passcode").value;
  let repass = /^[a-z]{3,}[0-9]{3,}$/


  if(!name){
    document.getElementById("get_name").style="border:1px solid red";
    document.getElementById("alert_n").style="color:red";
    document.getElementById("alert_n").innerHTML="please fill out this field"
  }
  else if(!re.test(name)){
    document.getElementById("get_name").style="border:1px solid red";
    document.getElementById("alert_n").style="color:red";
    document.getElementById("alert_n").innerHTML="not valid";
  }
  else{
    document.getElementById("get_name").style = "border:1px solid green"
    document.getElementById("alert_n").innerHTML="";
  }
  

  if(!email){
    document.getElementById("email_get").style="border:1px solid red";
    document.getElementById("alert_em").style="color:red";
    document.getElementById("alert_em").innerHTML="please fill out this field";
  }
  else if(!remail.test(email)){
    document.getElementById("email_get").style="border:1px solid red";
    document.getElementById("alert_em").style="color:red";
    document.getElementById("alert_em").innerHTML="Enter valid email adress";
    
  }
  else{
    document.getElementById("email_get").style = "border:1px solid green"
    document.getElementById("alert_em").innerHTML="";
  }

  if(!pass){
    document.getElementById("passcode").style="border:1px solid red";
    document.getElementById("alert_pas").style="color:red";
    document.getElementById("alert_pas").innerHTML="please fill out this field";
  }
  else if(!repass.test(pass)){
    document.getElementById("passcode").style="border:1px solid red";
    document.getElementById("alert_pas").style="color:red";
    document.getElementById("alert_pas").innerHTML="Enter valid passcode";

  }
  else{
    document.getElementById("passcode").style = "border:1px solid green"
    document.getElementById("alert_pas").innerHTML="";
  }


  
}


    
  