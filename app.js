

const dog = document.getElementById("dog")
const cat = document.getElementById("cat");
const cow = document.getElementById("cow");


function visibleDog () {
    
dog.hidden = false;
}
function visibleCow() {
 
  cow.hidden = false
}
function visibleCat() {
  
  cat.hidden = false;
}

function hideDog() {
  dog.hidden = true;
}
function hideCow() {
  cow.hidden = true;
}
function hideCat() {
  cat.hidden = true;
}
addEventListener("showCow", onclick);
addEventListener("showCat", onclick);
addEventListener("showDog", onclick);
addEventListener("hideCow", onclick);
addEventListener("hideCat", onclick);
addEventListener("hideDog", onclick);
