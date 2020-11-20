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
                    $('#navIcons01 img').attr('src', '../img/22/index/ch01_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch01_nav_member.png');
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
                    $('#navIcons01 img').attr('src', '../img/22/index/ch02_nav_search.png');
                    $('#navIcons02 img').attr('src', '../img/22/index/ch02_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch02_nav_member.png');
                    $('.conversionNum').counterUp({
                        delay: 10,
                        time: 1500
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

// 食物浪費體積換算
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = count + inc;
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


// conversionNum