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


// 地圖上區標籤
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


// 麵包滑動到才開始跑 用jquerykeyframes套件 in nodeModules
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
    let percentage = $('#goalmoney').text();
    console.log(percentage);

    $.keyframe.define([{
        name: 'widthChange',
        '0%': { 'width': '0%' },
        '100%': { 'width': `${percentage}%` }
    }]);
    $('.breadLine').playKeyframe(
        'trapdoor-sequence 1s linear 0s infinite normal forwards',
        // complete
    );
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


/* back to top JS */

$(document).ready(function () {
    $('a.back_to_top').click(function (e) {
        $('html, body').animate({ scrollTop: 0 }, '1000');
        e.preventDefault();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back_to_top').fadeIn('2000');
        } else {
            $('.back_to_top').fadeOut('500');
        }
    });
});

// 桌機板search bar
// let searchButtonWeb = document.querySelector('#navIcons01');
// searchButtonWeb.addEventListener('click', function () {
//     $('#searchInputForWeb').toggleClass('allow').css({
//         'display': 'none',
//     })
// });

// 桌機板search bar
$(document).ready(function (e) {
    $("#navIcons01").click(function () {

        // if ($("#searchInputForWeb")[0].style.display == 'block') {
        //     $("#searchInputForWeb").css({
        //         'display': 'none',
        //         ''
        //     });

        // } else {
        //     $("#searchInputForWeb").css({
        //         'display': 'block',
        //     })

        // }

        // if ($("#searchInputForWeb")[0].style.opacity == 0) {
        //     $("#searchInputForWeb").addClass('block');
        // } else if ($(e.target) != $("#searchInputForWeb")) {
        //     $("#searchInputForWeb").removeClass('block');
        // }

        // $("#searchInputForWeb").toggleClass('block');
    });

    $("#navIcons01").focus(function () {
        $("#searchInputForWeb").addClass('block');
        $("#searchInputForWeb").focus();
    })
    $("#navIconsImg").focus(function () {
        $("#searchInputForWeb").addClass('block');
        $("#searchInputForWeb").focus();
    })
    $("#searchInputForWeb").focus(function () {
        $("#searchInputForWeb").addClass('block');
        $("#searchInputForWeb").focus();
    })
    $("#searchInputForWeb").blur(function () {
        $("#searchInputForWeb").removeClass('block');
        // alert()
    });
    // document.addEventListener("click", function (e) {
    //     if (e.target.classList.contains("searchInputBlur")) {
    //         $("#searchInputForWeb").addClass('block');
    //     } else {
    //         $("#searchInputForWeb").removeClass('block');
    //     }
    // });
});

// $('#sendButton').addClass('allow').css({
//     'background-color': '#B2C6A6',
//     'cursor': 'pointer'