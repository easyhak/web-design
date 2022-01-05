$(document).ready(function(){
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    });
    $('.navi > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    });
    
    var num = 1;
    setInterval(function(){
        if (num<3) {
            $('.slidewrap').animate({
                top:num*(-350)
            })
            num +=1;
        }
        else if (num==3) {
            $('.slidewrap').animate({
                top:0
            })
            num = 0
        }
    },3000)
    $('.tabmenu>ul>li>a').click(function(){
        $(this).parent().siblings().removeClass('active')
        $(this).parent().addClass('active')
    })

});//ready end
