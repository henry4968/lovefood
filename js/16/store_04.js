
const main = new Vue({
    el: '#all',
    data: {
    },

    mounted() {

    },

    methods: {

        checkOut() {

            const self = this;

            let discount = $("input[name='discount']").val();

            $.ajax({
                url: '../PHP/Frontend/cartCheckout.php',
                type: 'POST',
                dataType: "text",
                data: { discount },
                success: function (res) {
                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
            });
        }



    },

});








$(function () {

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

    //點擊其他地方關閉 Madal
    $("div.overlay").on("click", function () {
        $("div.overlay").removeClass("-on -opacity-zero");
    });

});
