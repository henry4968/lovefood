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
        complete
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



// ========================================

// // 捐款表單頁

// document.addEventListener("DOMContentLoaded", function () {

//     // 信用卡卡號 
//     var cards = document.getElementsByClassName("form-text-input-four");
//     for (let i = 0; i < cards.length; i++) {
//         // keydown 刪除倒退前一格
//         cards[i].addEventListener("keydown", function (e) {
//             if ((e.which >= 48 && e.which <= 57) || e.which == 8) {

//                 if (e.target.value.length == 0 && e.which == 8) {
//                     let previous_el = this.previousElementSibling.previousElementSibling
//                         ;
//                     if (previous_el != null) {
//                         previous_el.focus();
//                     }
//                 }

//             } else {
//                 e.preventDefault();
//             }
//         });
//         // keyup 自動tab到下一格
//         cards[i].addEventListener("keyup", function (e) {
//             let str = (e.target.value).replace(/\D/g, "");
//             e.target.value = str;
//             if (str.length == 4) {
//                 let next_el = this.nextElementSibling.nextElementSibling;
//                 if (next_el != null) {
//                     next_el.focus();
//                 }
//             }
//         });
//     }
// });



// 清空鍵
// var the_form = document.getElementById("the_form");
// the_form.addEventListener("reset", function () {
// });

// // 點擊帶入數字且變色
// $(function () {
//     let money = $('.form-money-box').find('.money-box');
//     console.log(money[0]);
//     money.eq(0).on('click', function (e) {
//         $('#amounttext').val('500');
//         money.css('background-color', 'white').css('color', '#B2C6A6')
//         $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
//     })
//     money.eq(1).on('click', function (e) {
//         $('#amounttext').val('1000');
//         money.css('background-color', 'white').css('color', '#B2C6A6')
//         $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
//     })
//     money.eq(2).on('click', function (e) {
//         $('#amounttext').val('5000');
//         money.css('background-color', 'white').css('color', '#B2C6A6')
//         $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
//     })
// });

// // 未選必填不能送出
// $(function () {
//     $('#sendButton').on('click', function (e) {

//         e.preventDefault();
//         let donationPlan = $("[name='donationPlan']:checked").val();
//         let donationMethod = $("input[name='donationMethod']").val();
//         let amount = $("input[name='amount']").val();
//         let name = $("input[name='name']").val();
//         let email = $("input[name='email']").val();
//         let cardType = $("input[name='cardType']").val();
//         let cardName = $("input[name='cardName']").val();
//         let cardName = $("input[name='cardNumberLine']").val();
//         let cardMonth = $("input[name='cardMonth']").val();
//         let cardYear = $("input[name='cardYear']").val();
//         let cardThree = $("input[name='cardThree']").val();
//         let check = $("input[name='check']").val();
//         // let donationPlan = $("input[name='donationPlan']").val()
//         console.log(donationPlan)
//         if (donationPlan == null || donationMethod == null) {

//         }

//     });
// });
