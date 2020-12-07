const app = new Vue({
    el: '.containerPoints',
    data() {
        return {
            tableData: null,
        }
    },

    beforeMount() {
        const self = this;
        let urlParams = new URLSearchParams(window.location.search);
        let number = urlParams.get('number');
        let account = urlParams.get('account');
        let name = urlParams.get('name');
        let phone = urlParams.get('phone');
        let pick01 = urlParams.get('datePick01');
        let pick02 = urlParams.get('datePick02');

        $.ajax({
            url: '../PHP/backStage/points/pointsQuery.php',
            type: 'POST',
            data: { number, account, name, phone, pick01, pick02 },
            success: function (res) {
                self.tableData = res;
            },
            error: function (res) {
                console.log(res);
            },
            dataType: "JSON",
        });
    },
    
    methods: {
        query() {
            const self = this;
            let urlParams = new URLSearchParams(window.location.search);
            let number = urlParams.get('number');
            let account = urlParams.get('account');
            let name = urlParams.get('name');
            let phone = urlParams.get('phone');
            let pick01 = urlParams.get('datePick01');
            let pick02 = urlParams.get('datePick02');

            $.ajax({
                url: '../PHP/backStage/points/pointsQuery.php',
                type: 'POST',
                data: { number, account, name, phone, pick01, pick02 },
                success: function (res) {
                    self.tableData = res;
                    // console.log('321');
                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },
                dataType: "JSON",
            });
        }
    }
});