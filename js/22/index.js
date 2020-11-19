// fullpage控制項目
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
        // 滾動至該章節時變化header色彩
        onLeave: function (origin, destination, direction) {
            console.log(destination);
            switch (destination.index) {
                case 0:
                    $('#logo').attr('src', '../img/22/index/ch01_header_logo.png');
                    $('#header').css('background-color', 'transparent');
                    $('.navGeneralAnchors').css('color', '#FDFBBA');
                    $('#navSepcialAnchor').css('color', '#858585');
                    $('#navSepcialAnchor div').css('background-color', '#FFFF9B');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch01_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    break;
                case 1:
                    $('#logo').attr('src', '../img/22/index/ch02_header_logo.png');
                    $('#header').css('background-color', 'transparent');
                    $('.navGeneralAnchors').css('color', '#5C6254');
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#717E5B');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch02_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch02_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch02_nav_member.png');
                    break;
                case 2:
                    $('#logo').attr('src', '../img/22/index/ch03_header_logo.png');
                    $('#header').css('background-color', 'transparent');
                    $('.navGeneralAnchors').css('color', '#808F87');
                    $('#navSepcialAnchor').css('color', '#F7F7F7');
                    $('#navSepcialAnchor div').css('background-color', '#96B3A3');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch03_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch03_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch03_nav_member.png');
                    break;
                case 3:
                    $('#logo').attr('src', '../img/22/index/ch04_header_logo.png');
                    $('#header').css('background-color', '#D3E4C6');
                    $('.navGeneralAnchors').css('color', '#8F8770');
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#887664');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch04_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch04_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch04_nav_member.png');
                    break;
                case 4:
                    $('#logo').attr('src', '../img/22/index/ch05_header_logo.png');
                    $('#header').css('background-color', 'transparent');
                    $('.navGeneralAnchors').css('color', '#887664');
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#717E5B');
                    $('#navIcons01 img').attr('src', '../img/22/index/ch05_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch05_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch05_nav_member.png');
                    break;
                case 5:
                    $('#logo').attr('src', '../img/22/index/ch06_header_logo.png');
                    $('#header').css('background-color', '#F6EEE5');
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
