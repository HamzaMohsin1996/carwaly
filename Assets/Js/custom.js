$(document).ready(function(){
    $('.allCarsBtn').on('click', function(){
        $(this).next('.allCarsDropdown').toggleClass('show');
    });
    $('#filters-toggle').on('click', function(){
      $('.sidebar-wrapper').toggleClass('show');
      document.body.style.overflow = "hidden"; // Disable scrolling on the body
  });
  $('#custom-navbar-toggler').on('click', function(){
    $('.custom-mobile-menu').addClass('show');
});
$('#close-sidebar-btn').on('click', function(){
  $('.custom-mobile-menu').removeClass('show');
});
  
  $( "#datepicker" ).datepicker();

  $('.close-btn-filter-sidebar').on('click', function(){
    $('.sidebar-wrapper').removeClass('show');
    document.body.style.overflow = "scroll"; // Disable scrolling on the body
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
//Price Range Slider
$(function() {
  $("#price-range").slider({
    step: 500,
    range: true, 
    min: 0, 
    max: 20000, 
    values: [0, 20000], 
    slide: function(event, ui)
    {$("#priceRange").val(ui.values[0] + " - " + ui.values[1]);}
  });
  $("#priceRange").val($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));

// Initialize datepicker for year range
$("#yearRange").datepicker({
  changeYear: true,
  dateFormat: 'yy',
  showButtonPanel: true,
  onClose: function(dateText, inst) {
    var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
    $(this).datepicker('setDate', new Date(year, 1));
  }
});

// Initialize slider with year range
$("#yearRange-wrap").slider({
  range: true,
  min: 2000, // Minimum year
  max: 2025, // Maximum year
  values: [2010, 2020], // Initial range values
  slide: function(event, ui) {
    $("#yearRange").text(ui.values[0] + " - " + ui.values[1]);
  }
});

// Update the displayed values alongside the slider
$("#yearRange").text($("#yearRange-wrap").slider("values", 0) +
  " - " + $("#yearRange-wrap").slider("values", 1));
});



//Milage Range Slider
$(function() {
  $("#milage-range").slider({
    step: 500,
    range: true, 
    min: 0, 
    max: 20000, 
    values: [0, 20000], 
    slide: function(event, ui)
    {$("#milageRange").val(ui.values[0] + " - " + ui.values[1]);}
  });
  $("#milageRange").val($("#milage-range").slider("values", 0) + " - " + $("#milage-range").slider("values", 1));
})

document.addEventListener("DOMContentLoaded", function() {
  // Get all thumbnail images
  var thumbnails = document.querySelectorAll(".thumbnail");

  // Add click event listener to each thumbnail
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Get the src attribute of the clicked thumbnail
      var newImageSrc = this.src;
      
      // Set the big image source to the clicked thumbnail's source
      document.getElementById("big-image").src = newImageSrc;
    });
  });
});


