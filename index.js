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
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        
        break;
    case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
     case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
     case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
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