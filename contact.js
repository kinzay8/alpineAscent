function contact(){
    let fnam=document.getElementById("fname").value;
let ref=/[A-za-z]{3,}$/;
let lnam=document.getElementById("lname").value;
let rel=/[A-za-z]{3,}$/;
let mess=document.getElementById("mes").value;
let ema=document.getElementById("email").value;
let ree=/^[\w]+@[A-Za-z]{4,}[.][A-Za-z]{2,}$/;
let contact=document.getElementById("ph").value;
let rep=/[0-9]{11}$/;

    if(!fnam){
        document.getElementById("sp_1").style="color:red";
        document.getElementById("sp_1").innerHTML="Please fill out this field!";
        document.getElementById("fname").style="border:2px solid red"
    }
    else if (!ref.test(fnam)) {
        document.getElementById("sp_1").style="color:red";
        document.getElementById("sp_1").innerHTML="Please enter valid name!";
        document.getElementById("fname").style="border:2px solid red"
        
    } 
    else {
        document.getElementById("sp_1").innerHTML=" ";
        document.getElementById("fname").style=" " 
    }

   

if(!lnam){
    document.getElementById("sp_2").style="color:red";
    document.getElementById("sp_2").innerHTML="Please fill out this field!";
    document.getElementById("lname").style="border:2px solid red"
}
else if (!rel.test(lnam)) {
    document.getElementById("sp_2").style="color:red";
    document.getElementById("sp_2").innerHTML="Please enter valid name!";
    document.getElementById("lname").style="border:2px solid red"
    
} 
else {
    document.getElementById("sp_2").innerHTML=" ";
    document.getElementById("lname").style=" " 
}


if(!mess){
    document.getElementById("sp_3").style="color:red";
    document.getElementById("sp_3").innerHTML="Please fill out this field!";
    document.getElementById("mes").style="border:2px solid red"
}

else {
    document.getElementById("sp_3").innerHTML=" ";
    document.getElementById("mes").style=" " 
}
if(!ema){
    document.getElementById("sp_4").style="color:red";
    document.getElementById("sp_4").innerHTML="Please fill out this field!";
    document.getElementById("email").style="border:2px solid red"
}
else if (!ree.test(ema)) {
    document.getElementById("sp_4").style="color:red";
    document.getElementById("sp_4").innerHTML="invalid email!";
    document.getElementById("email").style="border:2px solid red"
    
} 
else {
    document.getElementById("sp_4").innerHTML=" ";
    document.getElementById("email").style=" " 
}
if(!contact){
    document.getElementById("sp_5").style="color:red";
    document.getElementById("sp_5").innerHTML="Please fill out this field!";
    document.getElementById("ph").style="border:2px solid red"
}
else if (!rep.test(contact)) {
    document.getElementById("sp_5").style="color:red";
    document.getElementById("sp_5").innerHTML="invalid conact!";
    document.getElementById("ph").style="border:2px solid red"
    
} 
else {
    document.getElementById("sp_5").innerHTML=" ";
    document.getElementById("ph").style=" " 
}
}
