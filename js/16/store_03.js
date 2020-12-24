const app = new Vue({
    el: '.cartbgc_16',
    data: {
        sessionId: null,
        storgeValue: null,
    },

    mounted() {

        const self = this;

        // let aa = localStorage.getItem();
        // console.log(aa);


        // let StorageKeys = Object.keys(localStorage);
        // 一些防呆功能待寫

        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            type: 'POST',
            dataType: "text",
            success: function (res) {
                self.sessionId = res;
                console.log(self.sessionId);
            },
            error: function (res) {
                console.log("回傳失敗！");
                console.log(res.responseText);
            },
        });


        // self.storgeValue = JSON.parse(localStorage.getItem('itemStorage'));

        setTimeout(function () {

            let loggnedInId = self.sessionId;

            $.ajax({
                url: '../PHP/Frontend/cartShowPoints.php',
                type: 'POST',
                dataType: "text",
                data: { loggnedInId },
                success: function (res) {
                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
            });

        }, 1000)



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