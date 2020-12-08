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
        let number = $("input[name='number']").val()
        let account = $("input[name='account']").val()
        let name = $("input[name='name']").val()
        let phone = $("input[name='phone']").val()
        let pick01 = $("input[name='datePick01']").val()
        let pick02 = $("input[name='datePick02']").val()

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
            let number = $("input[name='number']").val()
            let account = $("input[name='account']").val()
            let name = $("input[name='name']").val()
            let phone = $("input[name='phone']").val()
            let pick01 = $("input[name='datePick01']").val()
            let pick02 = $("input[name='datePick02']").val()

            $.ajax({
                url: '../PHP/backStage/points/pointsQuery.php',
                type: 'POST',
                data: { number, account, name, phone, pick01, pick02 },
                success: function (res) {
                    self.tableData01 = res.pointsOfMember;
                    self.tableData02 = res.pointsUsing;
                    self.tableData03 = res.pointsIssance;
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
