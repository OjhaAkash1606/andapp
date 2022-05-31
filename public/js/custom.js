
$(document).ready(function( ) {
	
	//menusidebar
 menusidebarStatus = false;
   
   $('.icon-menu').click(function() {
    if (menusidebarStatus == false) {
        $('.menusidebar').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "-285px"
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

	
});