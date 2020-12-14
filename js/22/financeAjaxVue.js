const app = new Vue({
    el: '.containerFinance',
    data() {
        return {
            donationDetals: null,
            donationLog: null,
            isShow: false
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
            url: '../PHP/backStage/finance/donationQuery.php',
            type: 'POST',
            data: { DONATION_ID, name, email, pID_tID, dateStart, dateEnd },
            success: function (res) {
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

                console.log(res);
                console.log(res.donationDetals);
                console.log(res);
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
            this.isShow = false;

            const self = this;
            let DONATION_ID = $("input[name='DONATION_ID']").val()
            let name = $("input[name='name']").val()
            let email = $("input[name='email']").val()
            let pID_tID = $("input[name='pID_tID']").val()
            let dateStart = $("input[name='dateStart']").val()
            let dateEnd = $("input[name='dateEnd']").val()

            $.ajax({
                url: '../PHP/backStage/finance/donationQuery.php',
                type: 'POST',
                data: { DONATION_ID, name, email, pID_tID, dateStart, dateEnd },
                success: function (res) {

                    self.donationDetals = res.donationDetals;
                    self.donationLog = res;

                    for (let i = 0; i < res.donationDetals.length; i++) {
                        let donationPlan = res[i].DONATION_PLAN;

                        if (donationPlan == 1) {
                            res[i].DONATION_PLAN = "單次扣款";
                        } else if (donationPlan == 2) {
                            res[i].DONATION_PLAN = "定期捐款";
                        } else {
                            res[i].DONATION_PLAN = "資料錯誤";
                        }

                    }

                    console.log(res);
                    console.log(res.donationDetals);
                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
                dataType: "JSON",
            });
        },

        showContent(e) {
            this.isShow = true;

            const self = this;
            let DONATION_ID = $(e.target).data('id');

            $.ajax({
                url: '../PHP/backStage/finance/donationDetails.php',
                type: 'POST',
                data: { DONATION_ID },
                dataType: "JSON",
                success: function (res) {
                    self.donationDetals = res;

                    for (let i = 0; i < res.length; i++) {

                        if (res[i].DONATION_ID = DONATION_ID) {
                            self.donationDetals = [];
                            self.donationDetals.push(res[i]);
                        }

                        let sDD = self.donationDetals;

                        if (sDD[i].GENDER == 1) {
                            self.donationDetals[i].GENDER = "男";
                        } else if (sDD[i].GENDER == 2) {
                            self.donationDetals[i].GENDER = "女";
                        } else {
                            self.donationDetals[i].GENDER = "其他";
                        }

                        if (sDD[i].DONATION_PLAN == 1) {
                            self.donationDetals[i].DONATION_PLAN = "單次扣款";
                        } else if (sDD[i].DONATION_PLAN == 2) {
                            self.donationDetals[i].DONATION_PLAN = "定期捐款";
                        } else {
                            self.donationDetals[i].DONATION_PLAN = "資料錯誤";
                        }

                        if (sDD[i].DONATION_METHOD == 1) {
                            self.donationDetals[i].DONATION_METHOD = "信用卡";
                        }

                        if (sDD[i].DELIVERY_METHOD == 1) {
                            self.donationDetals[i].DELIVERY_METHOD = "免寄收據";
                        } else if (sDD[i].DELIVERY_METHOD == 2) {
                            self.donationDetals[i].DELIVERY_METHOD = "每次寄發";
                        } else {
                            self.donationDetals[i].DELIVERY_METHOD = "資料錯誤";
                        }

                        Object.keys(self.donationDetals[0]).forEach(function (key) {
                            if (self.donationDetals[0][key] === null) {
                                self.donationDetals[0][key] = "未填寫";
                            }
                        });

                    }

                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },

            });

        }
    }
})