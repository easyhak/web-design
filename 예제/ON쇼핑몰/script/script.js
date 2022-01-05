jQuery(document).ready(function(){
    $('.navi>li').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.navi>li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });
    
    $('.imgslide>a:gt(0)').hide();
    now = 0;
    next = 1;
    setInterval(function(){
       $('.imgslide>a').eq(now).fadeOut(); 
       $('.imgslide>a').eq(next).fadeIn(); 
        now=(now+1)%3;
        next=(next+1)%3;
    },3000);
    
    $('.tabmenu>li>a').click(function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    })

    $('.notice a:first').click(function(){
        $('#modal').addClass('active');
    })
    $('button').click(function(){
        $('#modal').removeClass('active');
    })
})