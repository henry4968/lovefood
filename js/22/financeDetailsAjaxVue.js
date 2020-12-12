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
        let urlParams = new URLSearchParams(window.location.search);
        let DONATION_ID = urlParams.get('DONATION_ID');
        let name = urlParams.get('name');
        let email = urlParams.get('email');
        let pID_tID = urlParams.get('pID_tID');
        let dateStart = urlParams.get('dateStart');
        let dateEnd = urlParams.get('dateEnd');

        $.ajax({
            url: '../PHP/backStage/finance/financeQuery.php',
            type: 'POST',
            data: { DONATION_ID, name, email, pID_tID, dateStart, dateEnd },
            success: function (res) {
                self.donationLog = res.donationLog;

                var rDD = res.donationDetals;

                for (let i = 0; i < rDD.length; i++) {
                    if (rDD[i].DONATION_ID = DONATION_ID) {
                        self.donationDetals = [];
                        self.donationDetals.push(rDD[i]);
                    }
                }

                console.log(res);
                console.log(self.donationDetals);
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