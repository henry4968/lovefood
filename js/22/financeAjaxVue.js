const app = new Vue({
    el: '.containerFinance',
    data() {
        return {
            donationLog: null,
        }
    },

    mounted() {

        const self = this;
        let general_ID = $("input[name='general_ID']").val()
        let name = $("input[name='name']").val()
        let email = $("input[name='email']").val()
        let pID_tID = $("input[name='pID_tID']").val()
        let dateStart = $("input[name='dateStart']").val()
        let dateEnd = $("input[name='dateEnd']").val()

        $.ajax({
            url: '../PHP/backStage/finance/financeQuery.php',
            type: 'POST',
            data: { general_ID, name, email, pID_tID, dateStart, dateEnd },
            success: function (res) {
                console.log(res);
                self.donationLog = res;

                for (let i = 0; i < res.length; i++) {
                    let donationPlan = res[i].DONATION_PLAN;
                    if (donationPlan == 1) {
                        res[i].DONATION_PLAN = "單次扣款";
                    } else if (donationPlan == 2) {
                        res[i].DONATION_PLAN = "定期捐款";
                    } else {
                        res[i].DONATION_PLAN = "資料錯誤";
                    }

                }
            },
            error: function (res) {
                console.log("回傳失敗！");
                console.log(res.responseText);
            },
            dataType: "JSON",
        });

    },

    methods: {
        query() {
            const self = this;
            let general_ID = $("input[name='general_ID']").val()
            let name = $("input[name='name']").val()
            let email = $("input[name='email']").val()
            let pID_tID = $("input[name='pID_tID']").val()
            let dateStart = $("input[name='dateStart']").val()
            let dateEnd = $("input[name='dateEnd']").val()

            $.ajax({
                url: '../PHP/backStage/finance/financeQuery.php',
                type: 'POST',
                data: { general_ID, name, email, pID_tID, dateStart, dateEnd },
                success: function (res) {
                    console.log(res);
                    self.donationLog = res;

                    for (let i = 0; i < res.length; i++) {
                        let donationPlan = res[i].DONATION_PLAN;
                        if (donationPlan == 1) {
                            res[i].DONATION_PLAN = "單次扣款";
                        } else if (donationPlan == 2) {
                            res[i].DONATION_PLAN = "定期捐款";
                        } else {
                            res[i].DONATION_PLAN = "資料錯誤";
                        }

                    }
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
                dataType: "JSON",
            });
        }
    }
})