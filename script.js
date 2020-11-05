// Mobile Menu button
const showMobileMenu = () => {
  var x = document.getElementById("mobile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Toggle Skills Section
$(document).ready(function(){
  $("#skills-cta").click(function(){
    $("#skills").toggle(900);
  });
});
