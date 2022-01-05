jQuery(document).ready(function(){
    $('.navi li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    })
    $('.navi li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    })
    $('.slidewrap a:gt(0)').hide();
    now = 0;
    next = 1;
    setInterval(function(){
        $('.slidewrap a').eq(now).fadeOut(500);
        $('.slidewrap a').eq(next).fadeIn(500);
        now = (now+1)%3;
        next=(next+1)%3;
    },3000)
    
    $('.notice li:first').click(function(){
        $('#layer').addClass('active');
    })
    $('.btn').click(function(){
        $('#layer').removeClass('active');
    })
})