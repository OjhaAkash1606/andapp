
AOS.init();

 $(document).ready(function() {  
 
   menusidebarStatus = false;
   
   $('.icon-menu').click(function() {
    if (menusidebarStatus == false) {
        $('.menusidebar').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "-295px"
        }, 200);

        $(".icon-menu .fa-angle-double-left").hide();
        $(".icon-menu .fa-angle-double-right").show();
        menusidebarStatus = true;
    } else {
        $('.menusidebar').animate({
            left: "-285px"
        }, 200);
        $('body').animate({
            left: "-285px"
        }, 200);
        $(".icon-menu .fa-angle-double-left").show();
        $(".icon-menu .fa-angle-double-right").hide();
        menusidebarStatus = false;
    }
});
 
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar-fixed-top").addClass('fixtop');
	  }

	  else{
		  $(".navbar-fixed-top").removeClass('fixtop');
	  }
  })
  
 // animated placeholder 
	
	
	
              $('#one').owlCarousel({
                loop: true,
                margin: 10,
				nav:true,
                responsiveClass: true,
				autoplay:true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: false
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
			  
			    $("#owl-example").owlCarousel({
	 nav: true,
		 items:1,
	   loop:true,
	     autoplay:false,
    autoplayTimeout:20000,
			pagination: false,
			// rewindNav : false,
			 navText: ["<img src='../img/previous-btn.png'>", "<img src='../img/nextbtn.png'>"],
			 navClass:['owl-prev','owl-next'],
			
    //	rewindSpeed: 500
	});
	
            })
			





