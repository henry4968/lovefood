$(function(){
    $('#search > ul > li').click(function(){
        itemArea = $('.itemArea').slideDown('slow').css({'display':'flex'});

    });
}); 
//////////////輪播////////////
$(document).ready(function() {
    $('#lightSlider').lightSlider({
        auto: true,
        item:3,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:300,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
});
