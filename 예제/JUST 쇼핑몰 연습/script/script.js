jQuery(document).ready(function(){
    $('.navi li').mouseover(function(){
        $(this).parent().find('.submenu').stop().slideDown();
    });
    $('.navi li').mouseout(function(){
        $(this).parent().find('.submenu').stop().slideUp();
    });
    
    $('.imgslide>a').eq(0).siblings().hide();
    var now=0;
    var next=1;
    setInterval(function(){
        $('.imgslide>a').eq(now).fadeOut();
        $('.imgslide>a').eq(next).fadeIn();
        now = (now+1)%3;
        next = (next+1)%3;
    },3000);
    
    $('.tabmenu>li>a').click(function(){
        $(this).parent().siblings().addClass('active');
        $(this).parent().removeClass('active');
    })
    
    $('.notice>ul>li:first').click(function(){
        $('#modal').addClass('active');
    })
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    })
})