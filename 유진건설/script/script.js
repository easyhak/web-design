jQuery(document).ready(function(){
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
        $('.top').stop().animate({height:'220px'});
    })
    $('.navi').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
        $('.top').stop().animate({height:'100px'});
    })
    
    var index = 1;
    setInterval(function(){
        if (index < 3){
            $('.slidewrap').animate({
                top:index*(-300)
            })
            index += 1;
        }
        else{
            $('.slidewrap').animate({
                top:0
            })
            index = 1;
        }
    },3000)
    
    $('.notice li').eq(0).click(function(){
        $('#layer').addClass('active');
    })
    $('.btn').click(function(){
        $('#layer').removeClass('active');
    })
});