

$(document).ready(function () {

   AOS.init({
      duration: 1000 // Only animate once
   });
  
   $('.dropdown').hover(
      function () {
         $(this).find('.custom-arrow').html('▲');
      },
      function () {
         $(this).find('.custom-arrow').html('▼');
      }
   );


});

function scrollToSection() {
	
   document.getElementById("about").scrollIntoView({
      behavior: 'smooth'
   });
}

