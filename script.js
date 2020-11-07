// Mobile Menu button
const showMobileMenu = () => {
  var x = document.getElementById("mobile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Scroll down Sticky Nav
const shotStickyNav = () => {
  //Check if screen size is medium or wider
  //Get the top positon of window
  //If top position is greater than 250px, toggle sticky nav;

  if(screen.width >= 768){
    let topOfScreen = window.pageYOffset;
    const fixedNav = document.getElementById('sticky-nav');
    if(topOfScreen > 300){
        fixedNav.style.display = "fixed";
    } else {
        fixedNav.style.display = "none"
    }
  }
}
