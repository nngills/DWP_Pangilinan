(function($){

/*-----SMOOTH GO-TO-TOP SCROLL-----*/
    $('#topbtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
	
})(jQuery);