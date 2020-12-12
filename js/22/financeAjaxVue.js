const app = new Vue({
    el: '.containerFinance',
    data() {
        return {
            donationDetals: null,
            donationLog: null
        }
    },

    mounted() {

        const self = this;
        let DONATION_ID = $("input[name='DONATION_ID']").val()
        let name = $("input[name='name']").val()
        let email = $("input[name='email']").val()
        let pID_tID = $("input[name='pID_tID']").val()
        let dateStart = $("input[name='dateStart']").val()
        let dateEnd = $("input[name='dateEnd']").val()

        $.ajax({
            url: '../PHP/backStage/finance/financeQuery.php',
            type: 'POST',
            data: { DONATION_ID, name, email, pID_tID, dateStart, dateEnd },
            success: function (res) {
                self.donationDetals = res.donationDetals;
                self.donationLog = res.donationLog;

                for (let i = 0; i < res.donationDetals.length; i++) {
                    let donationPlan = res.donationLog[i].DONATION_PLAN;

                    if (donationPlan == 1) {
                        res.donationLog[i].DONATION_PLAN = "單次扣款";
                    } else if (donationPlan == 2) {
                        res.donationLog[i].DONATION_PLAN = "定期捐款";
                    } else {
                        res.donationLog[i].DONATION_PLAN = "資料錯誤";
                    }

                }

                console.log(res);
                console.log(res.donationDetals);
                console.log(res.donationLog);
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
            let DONATION_ID = $("input[name='DONATION_ID']").val()
            let name = $("input[name='name']").val()
            let email = $("input[name='email']").val()
            let pID_tID = $("input[name='pID_tID']").val()
            let dateStart = $("input[name='dateStart']").val()
            let dateEnd = $("input[name='dateEnd']").val()

            $.ajax({
                url: '../PHP/backStage/finance/financeQuery.php',
                type: 'POST',
                data: { DONATION_ID, name, email, pID_tID, dateStart, dateEnd },
                success: function (res) {

                    self.donationDetals = res.donationDetals;
                    self.donationLog = res.donationLog;

                    for (let i = 0; i < res.donationDetals.length; i++) {
                        let donationPlan = res.donationLog[i].DONATION_PLAN;

                        if (donationPlan == 1) {
                            res.donationLog[i].DONATION_PLAN = "單次扣款";
                        } else if (donationPlan == 2) {
                            res.donationLog[i].DONATION_PLAN = "定期捐款";
                        } else {
                            res.donationLog[i].DONATION_PLAN = "資料錯誤";
                        }

                    }

                    console.log(res);
                    console.log(res.donationDetals);
                    console.log(res.donationLog);
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