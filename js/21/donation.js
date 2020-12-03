// 數字跑

$(function () {
    $('#overFood').counterUp({
        delay: 10,
        time: 2000
    });
});
$(function () {
    $('#joinShop').counterUp({
        delay: 10,
        time: 2000
    });
});
$(function () {
    $('#helpChild').counterUp({
        delay: 10,
        time: 2000
    });
});
$(function () {
    $('#goalmoney').counterUp({
        delay: 10,
        time: 2000
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

