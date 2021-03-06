var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
  });
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 16,
    responsiveClass: true,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:3
      }
    }
  });
});
