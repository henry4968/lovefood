const app = new Vue({
    el: '.containerPoints',
    data() {
        return {
            pointsIssance: null,
            pointsDiscount: null,
            pointsOfMember: null,
            issanceLog: null,
            discountLog: null,
            isShow: false
        }
    },

    mounted() {
        const self = this;
        let number = $("input[name='number']").val()
        let account = $("input[name='account']").val()
        let name = $("input[name='name']").val()
        let phone = $("input[name='phone']").val()
        let dateStart = $("input[name='dateStart']").val()
        let dateEnd = $("input[name='dateEnd']").val()

        $.ajax({
            url: '../PHP/backStage/points/pointsQuery.php',
            type: 'POST',
            data: { number, account, name, phone, dateStart, dateEnd },
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
        showContent(e) {
            this.isShow = true;

            const self = this;
            let dataId = $(e.target).data('id');
            // alert(dataId);

            $.ajax({
                url: '../PHP/backStage/points/pointsDetails.php',
                type: 'GET',
                data: { dataId },
                dataType: "JSON",
                success: function (res) {
                    console.log(res);
                    self.issanceLog = res.issanceLog;
                    self.discountLog = res.discountLog;
                    self.pointsOfMember = res.pointsOfMember;

                    // var rMB = res.pointsOfMember;

                    // for (let i = 0; i < rMB.length; i++) {
                    //     if (rMB[i].MEMBER_ID == number) {
                    //         self.pointsOfMember = [];
                    //         self.pointsOfMember.push(rMB[i]);
                    //     }
                    // }

                    // console.log(res.pointsOfMember2)
                    // console.log(res);
                    // console.log(self.pointsOfMember);
                    // console.log(self.issanceLog);
                    // console.log(self.discountLog);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },

            });

        },

        query() {
            this.isShow = false;

            const self = this;
            let number = $("input[name='number']").val()
            let account = $("input[name='account']").val()
            let name = $("input[name='name']").val()
            let phone = $("input[name='phone']").val()
            let dateStart = $("input[name='dateStart']").val()
            let dateEnd = $("input[name='dateEnd']").val()

            $.ajax({
                url: '../PHP/backStage/points/pointsQuery.php',
                type: 'POST',
                data: { number, account, name, phone, dateStart, dateEnd },
                success: function (res) {
                    self.pointsIssance = res.pointsIssance;
                    self.pointsDiscount = res.pointsDiscount;
                    self.pointsOfMember = res.pointsOfMember;
                    self.issanceLog = res.issanceLog;
                    self.discountLog = res.discountLog;

                    let rMB = res.pointsOfMember;
                    let rPI = res.pointsIssance;
                    let rPD = res.pointsDiscount;
                    let rIL = res.issanceLog;
                    let rDL = res.discountLog;

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

                    let queryDateStart = document.querySelector("#queryDateStart");
                    let showDateStart = document.querySelector("#showDateStart");
                    let queryDateEnd = document.querySelector("#queryDateEnd");
                    let showDateEnd = document.querySelector("#showDateEnd");

                    showDateStart.innerHTML = queryDateStart.value;
                    showDateEnd.innerHTML = queryDateEnd.value;

                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
                dataType: "JSON",
            });
        },

    }
});
