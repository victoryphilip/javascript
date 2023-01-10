//build a time system if is morning or afternoon or evening
//step 1 define your variables

// var today = new Date();
// var hourNow  = today.getHours();
// var greeting;

// if (hourNow > 18){
//     greeting = `Good evening!`;
// } else if( hourNow > 12){
//     greeting = `Good afternoon!`;
// } else if( hourNow > 0){
//     greeting = `Good morning!`;
// } else{
//     greeting = `welcome`;
// }

// var namep = `Victory`;

// //console.log(alert(greeting));
// document.write(`<h2>`,greeting ,` </h2>` ,`<h2>`,namep , `</h2>`)

var height = 56;
var breath = 90;

var area = height * breath;


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}