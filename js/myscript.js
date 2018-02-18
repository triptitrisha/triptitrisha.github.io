$(document).ready(function(){
 $(window).scroll(function(){
     var scroll=$(window).scrollTop();
     if(scroll>300){
         $(".navbar-area").css("background","rgba(0,0,0,8");
     }
     else{
         $(".navbar-area").css("background","");
     }
 });   
});

