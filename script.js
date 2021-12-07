// let eventkey = document.querySelector(".subText");

// document.querySelector("#fname").addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     addNote();
//   }
// });

// document.getElementById("fname").addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     addNote();
//   }
// });

// document.querySelector("#fname").addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     let x = document.querySelector("#fname").value;
// //        console.log(x);
//     console.log("console.log(x); (1)");
//   }
// });

document.querySelector("#fname").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    // document.querySelector(".subText").submit();
    addNote();
    // const usersInput = document.querySelector("#fname");
  }
});

function addNote(){
  let x =  document.querySelector("#fname").value;
  let divN = document.createElement("div");
  let para = document.createElement("p");
  let paraText = document.createTextNode(x);
  let but = document.createElement("button");
  let y = document.querySelector(".test");

  divN.classList.add("notesList");
  para.classList.add("notesInput");
  but.classList.add("deleteBut");

  but.setAttribute("onclick", "deleFunc(this)");

  divN.appendChild(para);
  para.appendChild(paraText);
  divN.appendChild(but);
  y.appendChild(divN);
}

function deleFunc(el){
  var element = el;
  element.parentNode.remove();
}