const app = new Vue({
    el: '.containerPoints',
    data() {
        return {
            tableData01: null,
            tableData02: null,
            tableData03: null
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
                self.tableData01 = res.pointsOfMember;
                self.tableData02 = res.pointsUsing;
                self.tableData03 = res.pointsIssance;
                console.log(res);
                // console.log(res.pointsOfMember[0][0])
            },
            error: function (res) {
                console.log("回傳失敗！");
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
                    self.tableData01 = res.pointsOfMember;
                    self.tableData02 = res.pointsUsing;
                    self.tableData03 = res.pointsIssance;
                    console.log(res);
                    // console.log(res.pointsOfMember[0][0])
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
