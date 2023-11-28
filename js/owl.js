$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        autoWidth:true,
        items : 1, 
        center: true,
       });

       $("#owl-demo_2").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        917:{
            items:3,
        },
    
    }
       });
   
   
  });