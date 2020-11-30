// fullpage.js控制項目
$(function () {
    $('#main').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        menu: true,
        anchors: ['WhatIsLoveFood', 'HowMuchWeWasted', 'WasteHarmsTheEarth', 'CherishFromThisMeal', 'DonateToUs', 'ContactUs'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrowColor: '#FFFFFF',
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        responsiveSlides: true,

        // 垂直滾動至該章節時，header樣式及色彩的各種變化
        afterLoad: function (origin, destination, direction) {
            console.log(destination);
            switch (destination.index) {
                case 0:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh01');
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
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh02');
                    $('#hamburgerMenuButton span').after(function () {
                        $(this).css('background - color', '#FFFFFF');
                    });
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
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_header_logo.png');
                    });
                    $('#header').css('background-color', 'transparent');
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#808F87');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#FFFFFF');
                    }, function () {
                        $(this).css('color', '#808F87');
                    });
                    $('#navSepcialAnchor').css('color', '#F7F7F7');
                    $('#navSepcialAnchor div').css('background-color', '#96B3A3');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#BFD4C8');
                    }, function () {
                        $(this).css('background-color', '#96B3A3');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch03_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch03_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch03_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_member.png');
                    });
                    break;
                case 3:
                    $('#logo').attr('src', '../img/22/index/ch04_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_header_logo.png');
                    });
                    $('#header').css({ 'background-color': '#D3E4C6', 'border-bottom': '1px solid #707070', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#8F8770');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#F2F0D7');
                    }, function () {
                        $(this).css('color', '#8F8770');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#887664');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#F2F0D7');
                    }, function () {
                        $(this).css('background-color', '#887664');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch04_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch04_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch04_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_member.png');
                    });
                    break;
                case 4:
                    $('#logo').attr('src', '../img/22/index/ch05_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#887664');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#CEC2B6');
                    }, function () {
                        $(this).css('color', '#887664');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#717E5B');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#CEC2B6');
                    }, function () {
                        $(this).css('background-color', '#717E5B');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch05_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch05_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch05_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_member.png');
                    });
                    break;
                case 5:
                    $('#logo').attr('src', '../img/22/index/ch06_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_header_logo.png');
                    });
                    $('#header').css({ 'background-color': '#F6EEE5', 'border-bottom': '1px solid #707070', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#96908A');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#DAD1C8');
                    }, function () {
                        $(this).css('color', '#96908A');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#B6ADA5');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#D9D0C7');
                    }, function () {
                        $(this).css('background-color', '#B6ADA5');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch06_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch06_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch06_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_member.png');
                    });
                    break;
            }
        },

        // 水平滑動至該頁面時，header樣式及色彩的各種變化
        afterSlideLoad: function (section, origin, destination, direction) {
            console.log(destination);
            switch (destination.index) {
                case 0:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh01');
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
                    $('#navIcons04 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    break;
                case 1:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh0102');
                    $('#logo').attr('src', '../img/22/index/ch0102_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none' });
                    $('.navGeneralAnchors').css('color', '#946C1E');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#E0C38B');
                    }, function () {
                        $(this).css('color', '#946C1E');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#946C1E');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#E0C38B');
                    }, function () {
                        $(this).css('background-color', '#946C1E');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch0102_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                case 2:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh0102');
                    $('#logo').attr('src', '../img/22/index/ch0102_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none' });
                    $('.navGeneralAnchors').css('color', '#946C1E');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#E0C38B');
                    }, function () {
                        $(this).css('color', '#946C1E');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#946C1E');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#E0C38B');
                    }, function () {
                        $(this).css('background-color', '#946C1E');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch0102_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                case 3:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh0102');
                    $('#logo').attr('src', '../img/22/index/ch0102_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none' });
                    $('.navGeneralAnchors').css('color', '#946C1E');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#E0C38B');
                    }, function () {
                        $(this).css('color', '#946C1E');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#946C1E');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#E0C38B');
                    }, function () {
                        $(this).css('background-color', '#946C1E');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch0102_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch0102_nav_member.png');
            }
        },
    });
});

// lightslider控制項目
$(document).ready(function () {
    $('#productCarouselList').lightSlider({
        item: 3,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        auto: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
});