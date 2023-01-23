


// let pass=document.getElementById("pass");
// let pre=/[0-9]{6,}$/;


function feedback(){
    let fname=document.getElementById("fnam").value;
let fre=/[A-za-z]{3,}$/;
let lname=document.getElementById("lnam").value;
let lre=/[A-za-z]{3,}$/;
let email=document.getElementById("ema").value;
let ere=/^[\w]+@[A-Za-z]{4,}[.][A-Za-z]{2,}$/;
let mes=document.getElementById("mess").value;

    if(!fname){
        document.getElementById("sp1").style="color:red";
        document.getElementById("sp1").innerHTML="Please fill out this field!";
        document.getElementById("fnam").style="border:2px solid red"
    }
    else if (!fre.test(fname)) {
        document.getElementById("sp1").style="color:red";
        document.getElementById("sp1").innerHTML="Please enter valid name!";
        document.getElementById("fnam").style="border:2px solid red"
        
    } 
    else {
        document.getElementById("sp1").innerHTML=" ";
        document.getElementById("fnam").style=" " 
    }

   

if(!lname){
    document.getElementById("sp2").style="color:red";
    document.getElementById("sp2").innerHTML="Please fill out this field!";
    document.getElementById("lnam").style="border:2px solid red"
}
else if (!lre.test(lname)) {
    document.getElementById("sp2").style="color:red";
    document.getElementById("sp2").innerHTML="Please enter valid name!";
    document.getElementById("lnam").style="border:2px solid red"
    
} 
else {
    document.getElementById("sp2").innerHTML=" ";
    document.getElementById("lnam").style=" " 
}


if(!email){
    document.getElementById("sp3").style="color:red";
    document.getElementById("sp3").innerHTML="Please fill out this field!";
    document.getElementById("ema").style="border:2px solid red"
}
else if (!ere.test(email)) {
    document.getElementById("sp3").style="color:red";
    document.getElementById("sp3").innerHTML="Please enter valid name!";
    document.getElementById("ema").style="border:2px solid red"
    
} 
else {
    document.getElementById("sp3").innerHTML=" ";
    document.getElementById("ema").style=" " 
}

if(!mes){
    document.getElementById("sp4").style="color:red";
    document.getElementById("sp4").innerHTML="Please fill out this field!";
    document.getElementById("mess").style="border:2px solid red"
}

else {
    document.getElementById("sp4").innerHTML=" ";
    document.getElementById("mess").style=" " 
}
}
