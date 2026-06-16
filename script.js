let love = document.querySelector("#lov");
let likes = document.querySelector("#like");
let con = document.querySelector("#container");




var flag = 0;

con.addEventListener("dblclick",function(){

if(flag === 0){
love.style.transform = "translate(-50%,-50%) scale(1)";
love.style.opacity ="0.8";
likes.style.color = "red";
flag = 1;
} else{

likes.style.color = "white";
  flag = 0;
}

setTimeout(function(){
// love.style.transform = "translate(-50%,-50%) scale(0)";
love.style.opacity ="0";
},1200)

//! upar ka transform scaling ka jarurat nhi h usike wajah se shrink hoke gyab ho rha tha jo nhi chahuye direct smooth fadeout chahiye

// setTimeout(function(){
// love.style.transform = "translate(-50%,-50%) scale(0)";
// love.style.opacity ="0.8";
// },2000)
})




likes.addEventListener("click",function(){

if(flag === 0){
likes.style.color = "red";
flag = 1;
} else{

likes.style.color = "white";
  flag = 0;
}
})
