//script
function navActive(){
  var nav = document.getElementsByClassName('nav')[0];
  if(window.location.hash == "#header"){
    nav.classList.remove('nav-active');
  }
  else{
    nav.classList.add('nav-active');
  }

}
