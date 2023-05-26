//Slideshow Script
//Variable and Function Call
let index = 0;
carousel();

//Carousel Function
function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    //hide the images not currently displayed
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {
    index = 1
  }
  //display image    
  x[index-1].style.display = "block";  
  setTimeout(carousel, 4000); 
}