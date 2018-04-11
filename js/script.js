$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
  });
});

window.addEventListener("load", setHeightVideo);
window.addEventListener("resize", setHeightVideo);

function setHeightVideo() {
  var video = document.querySelector(".yt");
  video.style.height = video.offsetWidth / 1.77 + 'px';
}
