let button = document.getElementById('button');
let clicks = 0;
let level = 1;
let timeout = 500;
let flag = true;
function randomPosition() {
  let maxWidth = window.innerWidth - 100; 
  let maxHeight = window.innerHeight - 50; 
  let newLeft = Math.random() * maxWidth + "px";
  let newTop = Math.random() * maxHeight + "px";
  button.style.marginLeft = newLeft;
  button.style.marginTop = newTop;
  flag = true;
}

function handleMouseover() {
  
  if(flag){
    flag = false;
    setTimeout(randomPosition, timeout); 
  }

}

function handleClick() {
  clicks++;
  console.log(level," ", timeout);
  if (clicks >= 3) {
    alert("You won level " + level);
    level++;
    clicks = 0;
    timeout -= 100;
    
    if (level > 6) {
      alert("Congratulations! You completed all levels.");
      return;
    }
  }
 
}

button.addEventListener('mouseover', handleMouseover);
button.addEventListener('click', handleClick);

