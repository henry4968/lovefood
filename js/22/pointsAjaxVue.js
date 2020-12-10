const app = new Vue({
    el: '.containerPoints',
    data() {
        return {
            pointsIssance: null,
            pointsDiscount: null,
            pointsOfMember: null,
            issanceLog: null,
            discountLog: null
        }
    },

    mounted() {
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
                self.pointsIssance = res.pointsIssance;
                self.pointsDiscount = res.pointsDiscount;
                self.pointsOfMember = res.pointsOfMember;
                self.issanceLog = res.issanceLog;
                self.discountLog = res.discountLog;

                var rMB = res.pointsOfMember;
                var rPI = res.pointsIssance;
                var rPD = res.pointsDiscount;
                var rIL = res.issanceLog;
                var rDL = res.discountLog;

                for (let i = 0; i < rPI.length; i++) {
                    for (let j = 0; j < rMB.length; j++) {
                        if (rMB[j].MEMBER_ID == rPI[i].MEMBER_ID_for_PI) {
                            rMB[j].TOTAL_ISSANCE = rPI[i].TOTAL_ISSANCE;
                        }
                    }
                }

                for (let i = 0; i < rPD.length; i++) {
                    for (let j = 0; j < rMB.length; j++) {

                        if (rMB[j].MEMBER_ID == rPD[i].MEMBER_ID_for_OD) {
                            rMB[j].TOTAL_DISCOUNT = rPD[i].TOTAL_DISCOUNT;
                        }
                    }
                }

                console.log(rMB);
                console.log(rPI);
                console.log(rPD);
                console.log(rIL);
                console.log(rDL);
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
                    self.pointsIssance = res.pointsIssance;
                    self.pointsDiscount = res.pointsDiscount;
                    self.pointsOfMember = res.pointsOfMember;
                    self.issanceLog = res.issanceLog;
                    self.discountLog = res.discountLog;

                    var rMB = res.pointsOfMember;
                    var rPI = res.pointsIssance;
                    var rPD = res.pointsDiscount;
                    var rIL = res.issanceLog;
                    var rDL = res.discountLog;

                    for (let i = 0; i < rPI.length; i++) {

                        for (let j = 0; j < rMB.length; j++) {
                            if (rMB[j].MEMBER_ID == rPI[i].MEMBER_ID_for_PI) {
                                rMB[j].TOTAL_ISSANCE = rPI[i].TOTAL_ISSANCE;
                            }
                        }
                    }

                    for (let i = 0; i < rPD.length; i++) {

                        for (let j = 0; j < rMB.length; j++) {

                            if (rMB[j].MEMBER_ID == rPD[i].MEMBER_ID_for_OD) {
                                rMB[j].TOTAL_DISCOUNT = rPD[i].TOTAL_DISCOUNT;
                            }
                        }
                    }

                    console.log(rMB);
                    console.log(rPI);
                    console.log(rPD);
                    console.log(rIL);
                    console.log(rDL);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
                dataType: "JSON",
            });
        }
    }
});
