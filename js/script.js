$(document).ready(function(){
  $('.carousel').slick({
    arrows: true
  });
});

window.addEventListener("load", setHeight);
window.addEventListener("resize", setHeight);

function setHeight() {
  var video = document.querySelector(".yt");
  video.style.height = video.offsetWidth / 1.77 + 'px';
}