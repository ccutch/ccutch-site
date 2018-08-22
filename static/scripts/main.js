particlesJS.load("particles-js", "/static/particles.json", function() {
  console.log("callback - particles.js config loaded");
});

anime({
  targets: "#ccutch-lines .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay(el, i) {
    return i * 250;
  },
  direction: "forward"
});
