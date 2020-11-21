fullpage.js控制項目
$(function () {
    $('#main').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        menu: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrowColor: '',
        easing: 'easeInOutCubic',
        easingcss3: 'ease',

        // 滾動至該章節時，header樣式及色彩的各種變化
        afterLoad: function (origin, destination, direction) {
            console.log(destination);
            switch (destination.index) {
                case 0:
                    $('#logo').attr('src', '../img/22/index/ch01_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#FDFBBA');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#FFE45E');
                    }, function () {
                        $(this).css('color', '#FDFBBA');
                    });
                    $('#navSepcialAnchor').css('color', '#858585');
                    $('#navSepcialAnchor div').css('background-color', '#FFFF9B');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#FFE45E');
                    }, function () {
                        $(this).css('background-color', '#FFFF9B');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch01_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member.png');
                    });
                    break;
                case 1:
                    $('#logo').attr('src', '../img/22/index/ch02_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#5C6254');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#FFFFFF');
                    }, function () {
                        $(this).css('color', '#5C6254');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#717E5B');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#CDD3C3');
                    }, function () {
                        $(this).css('background-color', '#717E5B');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch02_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch02_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch02_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member.png');
                    });
                    // 食物浪費體積換算動畫
                    $('.conversionNum').counterUp({
                        delay: 10,
                        time: 2000
                    });
                    break;
                case 2:
                    $('#logo').attr('src', '../img/22/index/ch03_header_logo.png');
                    $('#header').css('background-color', 'transparent');
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#808F87');
                    $('#navSepcialAnchor').css('color', '#F7F7F7');
                    $('#navSepcialAnchor div').css('background-color', '#96B3A3');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch03_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch03_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch03_nav_member.png');
                    break;
                case 3:
                    $('#logo').attr('src', '../img/22/index/ch04_header_logo.png');
                    $('#header').css({ 'background-color': '#D3E4C6', 'border-bottom': '1px solid #707070', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#8F8770');
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#887664');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch04_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch04_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch04_nav_member.png');
                    break;
                case 4:
                    $('#logo').attr('src', '../img/22/index/ch05_header_logo.png');
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#887664');
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#717E5B');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch05_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch05_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch05_nav_member.png');
                    break;
                case 5:
                    $('#logo').attr('src', '../img/22/index/ch06_header_logo.png');
                    $('#header').css({ 'background-color': '#F6EEE5', 'border-bottom': '1px solid #707070', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#96908A');
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#B6ADA5');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch06_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch06_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch06_nav_member.png');
                    break;
            }
        }
    });
});

// 首頁輪播（非滑動）間隔控制
$(function () {

    var chapter01BgImages = ["ch0101_bg_fruit_and_table.png", "ch0101_bg_green_screen.png",
        "ch0102_bg_bottle_and_potato.png", "ch0102_bg_yellow_screen.png", "ch0103_bg_bread.png", "ch0103_bg_pink_screen.png",
        "ch0103_bg_spoon.png", "ch0104_bg_blue_screen.png"];

    var subSlogans = ["null", "#subSlogan01", "#subSlogan02", "#subSlogan03"];

    $(function () {

        let i = 0;
        let j = i + 1;

        $("#chapter01").css("background-image", "url(../../../img/22/index/" + chapter01BgImages[i] + "),url(../../../img/22/index/" + chapter01BgImages[j] + ")");

        setInterval(function () {
            i = i + 2;
            j = j + 2;

            if (j == chapter01BgImages.length + 1) {
                i = 0;
                j = i + 1;
            }

            $("#chapter01").fadeOut("slow", function () {
                $(this).css("background-image", "url(../../../img/22/index/" + chapter01BgImages[i] + "),url(../../../img/22/index/" + chapter01BgImages[j] + ")");
                $(this).fadeIn("slow");
            });

        }, 5000);

        let k = 0;
        let l = k - 1;

        setInterval(function () {
            k++;
            l = k - 1;

            if (k == subSlogans.length) {
                k = 0;

                // $(subSlogans[subSlogans.length - 1]).css("display", "none");

                // setInterval(function () {
                //     $(subSlogans[subSlogans.length - 1]).css("display", "none");
                // }, 1000);

            }

            $(subSlogans[k]).fadeOut("slow", function () {
                $(this).fadeIn("slow");
            });

            // $(subSlogans[l]).css("display", "none");

            // setInterval(function () {
            //     $(subSlogans[l]).css("display", "none");
            // }, 1000);

        }, 5500);

        setInterval(function () {
            k++;
            l = k - 1;

            if (k == subSlogans.length) {
                // k = 0;

                $(subSlogans[subSlogans.length - 1]).css("display", "none");

                // setInterval(function () {
                //     $(subSlogans[subSlogans.length - 1]).css("display", "none");
                // }, 1000);

            }

            $(subSlogans[l]).css("display", "none");

            // setInterval(function () {
            //     $(subSlogans[l]).css("display", "none");
            // }, 1000);

        }, 5000);

    });

});