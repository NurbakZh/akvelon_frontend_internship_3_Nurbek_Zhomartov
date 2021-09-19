//cats photos retrieved from https://unsplash.com/s/photos/cute-cat 
var s = 0
var photos = document.getElementsByClassName("Slider");

function move(n) {
  if((s+n) > -1 && (s+n) < photos.length) {
    show(s += n);
  }
}

function show(n) {
  var lr = document.getElementsByClassName("left_arrow");
  var rr = document.getElementsByClassName("right_arrow");
  for (var i = 0; i < photos.length; i++) {
      photos[i].style.display = "none"; 
  }
  photos[n].style.display = "block"; 
}
