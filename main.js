// let test = document.getElementById("test");

// test.addEventListener("mouseenter", function(
//     event){
//         event.target.style.color = "crimson";

//         setTimeout(function(){
//             event.target.style.color = "green";
//         }, 500);
//     }, false);
// onmouseover=document.getElementsByClassName('about')[0].style.backgroundColor='Blue';
// document.getElementsByClassName("about")[0].onmouseover = function() {mouseOver()};
// document.getElementsByClassName("about")[0].onmouseout = function() {mouseOut()};

// function mouseOver() {
//     document.getElementsByClassName("about")[0].style.css.background.color = "red";
// }

// function mouseOut() {
//     document.getElementsByClassName("about")[0].style.css.background.color = "black";
// }

let about = document.getElementsByClassName("about")[0];
let skills = document.getElementsByClassName("Skills")[0];
// let projects = document.getElementsByClassName("projects")[0];

about.addEventListener("mouseover", function( event ){
    event.target.style.color = "black";
});

skills.addEventListener("mouseover", function ( event ){
    event.target.style.color = "white";
});
console.log("Hover over the boxes to see the text!")
// projects.addEventListener("mouseover", function ( event ){
//     event.target.style.color = "black";
// });