$(document).ready(function(){
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    });
    $('.navi > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    });
    
  
});//ready end
