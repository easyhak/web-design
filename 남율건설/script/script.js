jQuery(document).ready(function(){
    
    $('.navi li').mouseenter(function(){
        $('.submenu').stop().slideDown();
        $('#menuwrap').stop().animate({
            'height':'220px'
        });
    })
    $('.navi li').mouseout(function(){
        $('.submenu').stop().slideUp();
        $('#menuwrap').stop().animate({
            'height':'100px'
        });
    })
    now = 0;
    next = 1
    $('.imgslide>a:gt(0)').hide()
    setInterval(function(){
        $('.imgslide>a').eq(next).fadeIn();
        $('.imgslide>a').eq(now).fadeOut();
        now = (now+1)%3;
        next = (next+1)%3;
    },3000);
    
    $('.notice li:first>a').click(function(){
        $('#modal').addClass('active');
    });
    $('#modal .btn').click(function(){
        $('#modal').removeClass('active');
    })
})