function hashAnim(){
    if(window.location.hash =="#home" ){
      $('.header').addClass("header-active");
      $('.home-anim').addClass("home-anim-active");
      $('.human-anim').addClass("human-anim-active");
    }
    else {
      $('.header').removeClass("header-active");
      $('.home-anim').removeClass("home-anim-active");
      $('.human-anim').removeClass("human-anim-active");
    }
    if(window.location.hash =="#about_me" ){
      $('.chat-box').addClass("chat-box-active");
    }
    else {
        $('.chat-box').removeClass("chat-box-active");
    }
}
function hashload(){
  window.location = "#home";
}
