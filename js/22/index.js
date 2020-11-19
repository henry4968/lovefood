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
        scrollBar: true,
        controlArrowColor: '',

        easing: 'easeInOutCubic',
        easingcss3: 'ease',
    });
});

// 滾動header變色
