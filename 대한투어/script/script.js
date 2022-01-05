jQuery(document).ready(function(){
    $('.navi').mouseover(function(){
        $('.submenu').stop().slideDown();
        $('.top').stop().animate({
            height:'220px'
        })
    })
    $('.navi').mouseout(function(){
        $('.submenu').stop().slideUp();
        $('.top').stop().animate({
            height:'100px'
        })
    })
    
    var num = 1;
    setInterval(function(){
        if (num<3){
            $('.slidewrap').animate({
                top:num*(-301)
            })
            num+=1
        }
        else if (num == 3) {
            $('.slidewrap').animate({
                top:0
            })
            num = 1;
        }
    },3000);
    
    $('.notice ul li:first').click(function(){
        $('#modal').addClass('active');
    })
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    })
})