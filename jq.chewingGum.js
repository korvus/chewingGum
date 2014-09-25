(function($){

  $.fn.chewingGum = function(parametres){

    var defauts = {
      "nameClassStick": "fixed",
      "nameClassUStick": "display",
      "affected": "none"
    };

    var params = $.extend(defauts, parametres);

    this.each(function(){
      var positionElementInPage = $(this).offset().top;
      var heightWindow = $(window).height();
      if(params.affected == "none"){
        affected = this;
      }else{
        affected = params.affected+","+this;
      }
    
      $(window).scroll(
        function(){
          if($(window).scrollTop() >= positionElementInPage){
            $(affected).addClass(params.nameClassStick);
          }else{
            $(affected).removeClass(params.nameClassStick);
          }
          if($(window).scrollTop() > heightWindow){
            $(affected).addClass(params.nameClassUStick);
          }else{
            $(affected).removeClass(params.nameClassUStick);
          }
        }
      );

    })

  }

})(jQuery);