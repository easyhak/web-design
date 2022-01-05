$(document).ready(function(){
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    });
    $('.navi > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    });
    
    start();
    function start(){
        $('.imageslide>a').eq(0).siblings().animate({width:'-800px'});
    };
    
    var imgs = 2;
    var now = 0
    setInterval(function(){
        now = now == imgs?0:now+=1;
        $('.imageslide>a').eq(now-1).animate({width:'-800px'})
        $('.imageslide>a').eq(now).animate({width:'800px'})
        console.log(now)
    },3000);
    $(function(){
        $('.tabmenu>li>a').click(function(){
            $(this).parent().addClass('active').siblings().removeClass('active');
            return false;
        });
    });
    $(function(){
        $('.notice li:first').click(function(){
            $('#modal').addClass('active');
        });
        $('.btn').click(function(){
            $('#modal').removeClass('active');
        })
    });
    
});//ready end
