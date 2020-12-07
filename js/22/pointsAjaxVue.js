const app = new Vue({
    el: '.containerPoints',
    data() {
        return {
            tableData: null,
        }
    },

    // beforeMount() {
    //     const self = this;
    //     let urlParams = new URLSearchParams(window.location.search);
    //     let order = urlParams.get('order');
    //     let number = urlParams.get('number');
    //     let account = urlParams.get('account');
    //     let phone = urlParams.get('phone');
    //     let pick01 = urlParams.get('datePick01');
    //     let pick02 = urlParams.get('datePick02');

    //     $.ajax({
    //         url: '../PHP/backStage/points/orderQuery.php',
    //         type: 'POST',
    //         data: { order, number, account, phone, pick01, pick02 },
    //         success: function (res) {
    //             self.tableData = res;
    //         },
    //         error: function (res) {
    //             console.log(res);
    //         },
    //         dataType: "JSON",
    //     });
    // },
    methods: {
        query() {
            const self = this;

            let order = $("input[name='order']").val();
            let number = $("input[name='number']").val();
            let account = $("input[name='account']").val();
            let phone = $("input[name='phone']").val();
            let pick01 = $("input[name='datePick01']").val();
            let pick02 = $("input[name='datePick02']").val();

            $.ajax({
                url: '../PHP/backStage/points/orderQuery.php',
                type: 'POST',
                data: { order, number, account, phone, pick01, pick02 },
                success: function (res) {
                    self.tableData = res;
                    console.log('1233333')
                    console.log(res);
                },
                error: function (res) {
                    console.log(res);
                },
                dataType: "JSON",
            });
        }
    }
});