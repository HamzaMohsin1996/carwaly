$(document).ready(function(){
    $('.allCarsBtn').on('click', function(){
        $(this).next('.allCarsDropdown').toggleClass('show');
    });
    
    $('.allCarsBtn').mouseenter(function(){
        $(this).next('.allCarsDropdown').addClass('show');
    });
    
    $('.allCarsDropdown').mouseenter(function(){
        $(this).addClass('show');
    }).mouseleave(function(){
        $(this).removeClass('show');
    });
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
      });
    
});
   // Add an event listener for the 'scroll' event on the window object
   window.addEventListener('scroll', function() {
    // Check if the scroll position is greater than a certain threshold
    if (window.scrollY > 100) { // Change 100 to your desired scroll position
        // Add the 'scroll' class to the body element
        document.body.classList.add('scroll');
    } else {
        // Remove the 'scroll' class from the body element
        document.body.classList.remove('scroll');
    }
});
