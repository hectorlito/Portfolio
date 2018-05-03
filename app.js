var skills = ["• HTML", "• CSS", "• JavaScript", "• Typed.js", "• jQuery", "• Bootstrap", "• MongoDB", "• Express", "• Angular.js", "• Node.js"];
var index = 0;                                // index of the currently displayed hello
$("#skills").text(skills[0]);                 // start by showing a hello

(function animate() {                         // the function responsibe for the animation
  $("#skills").fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % skills.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.textContent = skills[index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();

var skills2 = ["• Typed.js", "• Node.js", "• JavaScript","• CSS", "• Express", "• jQuery", "• Bootstrap", "• Angular.js", "• MongoDB",  "• HTML"];
var index = 0;                                // index of the currently displayed hello
$("#skills2 ").text(skills2 [0]);                 // start by showing a hello

(function animate() {                         // the function responsibe for the animation
  $("#skills2 ").fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % skills2 .length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.textContent = skills2 [index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();

var skills3 = [ "• Express", "• HTML", "• jQuery", "• MongoDB", "• Angular.js", "• Node.js", "• Typed.js", "• Bootstrap",  "• JavaScript", "• CSS"];
var index = 0;                                // index of the currently displayed hello
$("#skills3").text(skills3[0]);                 // start by showing a hello

(function animate() {                         // the function responsibe for the animation
  $("#skills3").fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % skills3.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.textContent = skills3[index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();

// var typed = new Typed('.element', {
//   strings: ["What will this do?", "Second sentence."],
//   typeSpeed: 30
// });


let firstmodal = document.getElementById('1stModal')
let secondmodal = document.getElementById('2ndModal')
let thirdmodal = document.getElementById('3rdModal')

openModal = function(btn){
      if(btn === 'fuckit'){
        console.log("peach Apple");
        firstmodal.style.display = 'block';
    } else if (btn === 'pg'){
      console.log("peach Apple");
      secondmodal.style.display = 'block';
    } else if (btn === 'joga'){
        console.log("peach Apple");
        thirdmodal.style.display = 'block';
      }
}

window.onclick = function(event) {
    if (event.target == firstmodal || event.target == secondmodal || event.target == thirdmodal) {
        event.target.style.display = "none";
    }
  }
