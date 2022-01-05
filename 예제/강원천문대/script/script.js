jQuery(document).ready(function(){
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    })
    $('.navi>li').mouseout(function(){
        $('.submenu').stop().slideUp();
    })
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
    
    
    $('.tabmenu>li>a').click(function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        
    })
    $('.notice li:first').click(function(){
        $('#modal').addClass('active');
    });
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    });
});