let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let daniel = document.querySelector(".daniel");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value + "px";
  daniel.style.fontSize = value + "px";
  daniel.style.position = "fixed";

  if (scrollY >= 67) {
    daniel.style.fontSize = 67 + "px";
    if (scrollY >= 435) {
      daniel.style.display = "none";
    } else {
      daniel.style.display = "block";
    }
    if (scrollY >= 148) {
      document.querySelector(".content").style.background =
        "linear-gradient(#376281, #22001f)";
    } else {
      document.querySelector(".content").style.background =
        "linear-gradient(#1a0818, #22001f)";
    }
  }
};
