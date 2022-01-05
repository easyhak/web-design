jQuery(document).ready(function(){
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.navi').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });
    
    num = 1;
    setInterval(function(){
        if(num<3){
            $('.slidewrap').animate({
                left:num*(-1200)
            })
            num+=1
        }
        else if (num==3){
            $('.slidewrap').animate({
                left:0
            })
            num=1
        }
    },3000)
    
    $('.tabmenu>ul>li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
    
    $('.notice li:first').click(function(){
        $('#layer').addClass('active');
    })
    $('#layer .btn').click(function(){
        $('#layer').removeClass('active');
    })
})