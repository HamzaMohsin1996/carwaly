$(document).ready(function(){
    // Open dropdown menu on click of "All Cars" button
    $('#allCarsBtn').on('click', function(){
        $('#allCarsDropdown').toggleClass('show');
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
