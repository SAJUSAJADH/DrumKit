var tom =new Audio("sounds/tom-1.mp3");
var tom2=new Audio("sounds/tom-2.mp3");
var tom3=new Audio("sounds/tom-3.mp3");
var tom4=new Audio("sounds/tom-4.mp3");
var bass=new Audio("sounds/kick-bass.mp3");
var crash=new Audio("sounds/crash.mp3");
var snare=new Audio("sounds/snare.mp3");
var drums=document.querySelectorAll(".drum").length;
var i=0;
while(i<drums)
{document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    var btnclick = this.innerHTML;
    sound(btnclick);
    animate(btnclick);
    
});
i++;
}
document.addEventListener("keypress",function(event)
{
   
    sound(event.key);
    animate(event.key);


})
function sound(key){

switch (key) {
    case "w":
        tom.play();
        break;
    case "a":
        tom2.play();
        break;
     case "s":
        tom3.play();
        break;
    case "d":
        tom4.play();
        break;
    case "j":
        bass.play();
        break;
     case "k":
        crash.play();
        break;
    case "l":
        snare.play();
        break;
    default:
        console.log("press valid inputs (w,a,s,d,j,k,l) only!!!!");
        break;
}
}
   function animate(currentkey){
        var animation=document.querySelector("."+currentkey);

        animation.classList.add("pressed");


       setTimeout(function(){
        animation.classList.remove("pressed");
       },100);

    }
