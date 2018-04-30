var skills = ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "MonogoDB", "Express", "Angular.js", "Node.js", "Typed.js"];
var index = 0;                                // index of the currently displayed hello
$("#skills").text(skills[0]);                 // start by showing a hello

(function animate() {                         // the function responsibe for the animation
  $("#skills").fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % skills.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.textContent = skills[index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();

var skills2 = ["Node.js","CSS", "JavaScript", "Express", "jQuery", "Bootstrap", "Angular.js", "MonogoDB",  "HTML", "Typed.js"];
var index = 0;                                // index of the currently displayed hello
$("#skills2 ").text(skills2 [0]);                 // start by showing a hello

(function animate() {                         // the function responsibe for the animation
  $("#skills2 ").fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % skills2 .length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.textContent = skills2 [index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();

var skills3 = [ "Express", "CSS", "JavaScript", "HTML", "jQuery", "MonogoDB",  "Angular.js", "Node.js", "Typed.js", "Bootstrap" ];
var index = 0;                                // index of the currently displayed hello
$("#skills3").text(skills3[0]);                 // start by showing a hello

(function animate() {                         // the function responsibe for the animation
  $("#skills3").fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % skills3.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.textContent = skills3[index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();

var typed = new Typed('.element', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 30
});
