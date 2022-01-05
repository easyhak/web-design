jQuery(document).ready(function(){
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();

        $('#menuwrap').stop().animate({
            'height':'250px','background':'#fff'
        });

    })
    $('.navi').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
        
        $('#menuwrap').stop().animate({
            'height':'100px','background':'#fff'
        });
    });
    $('.imgslide>a').eq(0).siblings().css({
        'left':'-1200px', 'display':'none'
    });
    now = 0
    next = 1
    setInterval(function(){
        
        $('.imgslide>a').eq(next).animate({left:'0px'});
        $('.imgslide>a').eq(now).animate({left:'-1200px'});
        $('.imgslide>a').eq(next).css({display:'block'});
        $('.imgslide>a').eq(now).css({display:'none'});
        now=(now+1)%3;
        next=(next+1)%3
    },3000)
    
    $('.notice li:first').click(function(){
        $('#modal').addClass('active');
    })
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    })
});