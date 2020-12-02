$(function paid() {

    // 開啟 Modal 彈跳視窗
    $("button.btn_modal").on("click", function () {
        $("div.overlay").addClass("-on");
    });

    // 關閉 Modal
    $("button.btn_modal_close").on("click", function () {
        $("div.overlay").addClass("-opacity-zero");

        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $("div.overlay").removeClass("-on -opacity-zero");
        }, 1000);
    });

});
