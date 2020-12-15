
//////////////輪播////////////
$(document).ready(function () {
    $('#carouselist').lightSlider({
        item: 4,
        loop: true,
        auto: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 483,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }

        ]
    });
});