
$(document).ready(function(){
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    });
    $('.navi > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    });
    $('.imgslide a:gt(0)').hide()
    index = 0;
    next = 1;
    setInterval(function(){
        $('.imgslide a').eq(index).fadeOut();
        $('.imgslide a').eq(next).fadeIn();
        index = (index + 1)%3
        next = (next+1)%3
    },3000);
    $('.notice li:first-child').click(function(){
       $('#modal').addClass('active');
    });
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    })
});//ready end

