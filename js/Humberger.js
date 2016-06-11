$(function(){

  	var Humberger = function($){
  	

    	var init = function(){
    		$(".Humberger__body").hide();
    		$(".Humberger__button").on("click", function() {
            	$(this).next().fadeToggle(100);
            	$(this).toggleClass("active");
        });
    };

    return {
      init : init
  	}

}(jQuery);

  Humberger.init();

});
