// 數字跑

// $(function () {
//     $('#overFood').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });
// $(function () {
//     $('#joinShop').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });
// $(function () {
//     $('#helpChild').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });
// $(function () {
//     $('#goalmoney').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });

// window.addEventListener('load', doFirst);
// function doFirst() {
//     readMpreButton = document.getElementsByClassName('readMpreButton')[0];
//     console.log(readMpreButton);
//     readMpreButton.addEventListener('click', function () {
//         main = document.getElementById('main');
//         main.style.filter = 'blur(3px)';
//         bb = document.getElementById('bb');
//         bb.style.display = 'block';
//     });
// }

// 跳窗
$(function () {

    // 開啟 Modal 彈跳視窗
    $("div.readMoreButton").on("click", function () {
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
