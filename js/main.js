var skyDivingContainer = $("#sky-diving-container");
var imageUrl = "./assets/images/"
var mountainbikingcontainer =$("#mountain-biking-container");
var snowboardingcontainer =$("#snow-boarding-container");
var bunjeejumpingcontainer =$("#bunjee-jumping-container");
var raftingcontainer=$("#rafting-container");




// //////////////////
//////Sky Diving///////
///////////////////

// onclick show all cards

$.getJSON("./data/skydiving.json", function(data){
    skyDivingContainer.html(makeProductGrid("Sky Diving",data))
})
//////////////////////
/////Mountain-biking////
////////////////////

$.getJSON("./data/mountainbiking.json",function(data){
    mountainbikingcontainer.html(makeProductGrid("Mountain-biking",data))
})
///////////////////////
/////snow boarding/////
///////////////////////

$.getJSON("./data/snowboarding.json",function(data){
    snowboardingcontainer.html(makeProductGrid("Snow-boarding",data))
})
/////////////////////
//////bunjee jumping//
//////////////////////

$.getJSON("./data/bunjee-jumping.json",function(data){
    bunjeejumpingcontainer.html(makeProductGrid("Bunjee-jumping",data))
})
////////////////////////
//////rafting/////////
//////////////////////

$.getJSON("./data/rafting.json",function(data){
    raftingcontainer.html(makeProductGrid("Rafting",data))
})


