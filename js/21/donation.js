// 數字跑

$(function () {
    $('#overFood').counterUp({
        // delay: 10,
        time: 2000
    });
});
$(function () {
    $('#joinShop').counterUp({
        // delay: 10,
        time: 2000
    });
});
$(function () {
    $('#helpChild').counterUp({
        // delay: 10,
        time: 2000
    });
});
$(function () {
    $('#goalmoney').counterUp({
        // delay: 10,
        time: 2000
    });
});

// 麵包滑動到才開始跑
$(function () {
    $(window).on('scroll', function () {
        let scrollWin = $(window).scrollTop();
        let bread = $('#breadImg').offset().top - ($(window).innerHeight() / 2);
        if (scrollWin >= bread) {
            $('.breadLine').css({
                animation: 'widthChange 2s linear forwards',
            });
        }

    });
});


// 跳窗1
$(function () {

    // 開啟 Modal 彈跳視窗
    $("#readMoreButton_1").on("click", function () {
        // alert("yes!!");
        $("#Overlay_All_1").addClass("-on");
    });

    // 關閉 Modal
    $("img.readMore_close").on("click", function () {
        $("#Overlay_All_1").removeClass("-on");
    });

    // 點擊背景部分關閉
    $(".storyOverlay_Bg").on("click", function () {
        $("#Overlay_All_1").removeClass("-on");
    });

});

// 跳窗2
$(function () {

    // 開啟 Modal 彈跳視窗
    $("#readMoreButton_2").on("click", function () {
        // alert("yes!!");
        $("#Overlay_All_2").addClass("-on");
    });

    // 關閉 Modal
    $("img.readMore_close").on("click", function () {
        $("#Overlay_All_2").removeClass("-on");
    });

    // 點擊背景部分關閉
    $(".storyOverlay_Bg").on("click", function () {
        $("#Overlay_All_2").removeClass("-on");
    });

});

// 跳窗3
$(function () {

    // 開啟 Modal 彈跳視窗
    $("#readMoreButton_3").on("click", function () {
        // alert("yes!!");
        $("#Overlay_All_3").addClass("-on");
    });

    // 關閉 Modal
    $("img.readMore_close").on("click", function () {
        $("#Overlay_All_3").removeClass("-on");
    });

    // 點擊背景部分關閉
    $(".storyOverlay_Bg").on("click", function () {
        $("#Overlay_All_3").removeClass("-on");
    });

});


// 數字%與麵包連動
// $(function () {
//     let abc = $('#goalmoney').html();
//     $('.bread').css('@keyframe', '');
// })


// 食饗冰箱門市輪播
$(document).ready(function () {
    $('#shopChange').lightSlider({
        pager: true,
        auto: true,
        item: 1,
        loop: true,
        slideMove: 1,
        controls: true,
        // slideMargin: 15,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            // {
            //     breakpoint: 575,
            //     settings: {
            //         item: 1,
            //         pager: true,
            //         loop: true,
            //         slideMove: 1,
            //         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            //         speed: 600
            //     }
            // }
        ]
    });
});

// 愛心輪播
$(document).ready(function () {
    $('#heartArea').lightSlider({
        pager: true,
        auto: true,
        item: 3,
        loop: true,
        slideMove: 1,
        controls: true,
        // slideMargin: 0,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    adaptiveHeight: false,
                    item: 2,
                    pager: true,
                    loop: true,
                    slideMove: 1,
                    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                    speed: 600
                }
            },
            {
                breakpoint: 750,
                settings: {
                    item: 1,
                    pager: true,
                    loop: true,
                    slideMove: 1,
                    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                    speed: 600
                }
            }
        ]
    });
});


// 愛心故事
$(document).ready(function () {
    $('#storyAll').lightSlider({
        pager: true,
        auto: true,
        item: 3,
        loop: true,
        slideMove: 1,
        controls: true,
        // slideMargin: 0,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    adaptiveHeight: false,
                    item: 2,
                    pager: true,
                    loop: true,
                    slideMove: 1,
                    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                    speed: 600
                }
            },
            {
                breakpoint: 750,
                settings: {
                    item: 1,
                    pager: true,
                    loop: true,
                    slideMove: 1,
                    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                    speed: 600
                }
            }
        ]
    });
});


