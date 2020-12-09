const app = new Vue({
    el: '.containerPoints',
    data() {
        return {
            pointsOfMember: null,
            issanceLog: null,
            discountLog: null,
            // tableData04: null
        }
    },

    mounted() {
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
                self.issanceLog = res.issanceLog;
                self.discountLog = res.discountLog;

                var rMB = res.pointsOfMember;

                for (let i = 0; i < rMB.length; i++) {
                    if (rMB[i].MEMBER_ID == number) {
                        self.pointsOfMember = rMB[i];
                    }
                }

                console.log(res);
                console.log(rMB[0].MEMBER_ID);
                console.log(self.pointsOfMember);
            },
            error: function (res) {
                console.log("回傳失敗！");
                console.log(res.responseText);
            },
            dataType: "JSON",
        });
    },
    // updated() {
    //     const self = this;
    //     let urlParams = new URLSearchParams(window.location.search);
    //     let number = urlParams.get('number');
    //     let account = urlParams.get('account');
    //     let name = urlParams.get('name');
    //     let phone = urlParams.get('phone');
    //     let pick01 = urlParams.get('datePick01');
    //     let pick02 = urlParams.get('datePick02');

    //     $.ajax({
    //         url: '../PHP/backStage/points/pointsQuery.php',
    //         type: 'POST',
    //         data: { number, account, name, phone, pick01, pick02 },
    //         success: function (res) {
    //             self.tableData01 = res.pointsOfMember;
    //             self.tableData02 = res.pointsUsing;
    //             self.tableData03 = res.pointsIssance;
    //             console.log(res);
    //         },
    //         error: function (res) {
    //             console.log("回傳失敗！");
    //             console.log(res);
    //         },
    //         dataType: "JSON",
    //     });
    // },

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
                    // self.pointsOfMember = res.pointsOfMember;
                    self.issanceLog = res.issanceLog;
                    self.discountLog = res.discountLog;

                    var rMB = res.pointsOfMember;

                    for (let i = 0; i < rMB.length; i++) {
                        if (rMB[i].MEMBER_ID == number) {
                            self.pointsOfMember = rMB[i];
                        }
                    }

                    console.log(res);
                    console.log(rMB[0].MEMBER_ID);
                    console.log(number);
                    console.log(self.pointsOfMember)
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },
                dataType: "JSON",
            });
        },
        update() {
            const self = this;
            let urlParams = new URLSearchParams(window.location.search);
            let number = urlParams.get('number');
            let points = $("input[name='points']").val();
            $.ajax({
                url: '../PHP/backStage/points/pointsUpdate.php',
                type: 'POST',
                data: { points, number },
                success: function (res) {
                    self.tableData04 = res;
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
