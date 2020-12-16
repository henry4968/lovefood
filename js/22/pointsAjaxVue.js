const app = new Vue({
    el: '.containerPoints',
    data: {
        pointsIssance: null,
        pointsDiscount: null,
        pointsOfMember: null,
        issanceLog: null,
        discountLog: null,
        ShowFinalPoints: null,
        showTab: false,
        showDetails: true,
        uploadFile: null
    },

    mounted() {
        const self = this;
        let id = $("input[name='id']").val();
        let account = $("input[name='account']").val();
        let name = $("input[name='name']").val();
        let phone = $("input[name='phone']").val();
        let dateStart = $("input[name='dateStart']").val();
        let dateEnd = $("input[name='dateEnd']").val();

        $.ajax({
            url: '../PHP/backStage/points/pointsQuery.php',
            type: 'POST',
            data: { id, account, name, phone, dateStart, dateEnd },
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

    // updated() {

    //     const self = this;
    //     let selectedId = $("input[name='selectedId']").val();
    //     let points = $("input[name='points']").val();

    //     $.ajax({
    //         url: '../PHP/backStage/points/pointsUpdate.php',
    //         type: 'POST',
    //         data: { points, selectedId },
    //         success: function (res) {
    //             self.pointsUpdating = res;
    //             console.log(res)
    //         },
    //         error: function (res) {
    //             console.log("回傳失敗！");
    //             console.log(res.responseText);
    //         },
    //         dataType: "text",
    //     });

    // },

    methods: {

        showContent(e) {
            this.showDetails = false;

            const self = this;
            let dataId = $(e.target).data('id');
            let dateStart = $("input[name='dateStart']").val();
            let dateEnd = $("input[name='dateEnd']").val();

            $.ajax({
                url: '../PHP/backStage/points/pointsDetails.php',
                type: 'POST',
                data: { dataId, dateStart, dateEnd },
                dataType: "JSON",
                success: function (res) {
                    console.log(res);
                    self.issanceLog = res.issanceLog;
                    self.discountLog = res.discountLog;
                    self.pointsOfMember = res.pointsOfMember;
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },

            });

        },

        query() {
            this.showDetails = true;

            const self = this;
            let id = $("input[name='id']").val();
            let account = $("input[name='account']").val();
            let name = $("input[name='name']").val();
            let phone = $("input[name='phone']").val();
            let dateStart = $("input[name='dateStart']").val();
            let dateEnd = $("input[name='dateEnd']").val();

            $.ajax({
                url: '../PHP/backStage/points/pointsQuery.php',
                type: 'POST',
                data: { id, account, name, phone, dateStart, dateEnd },
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

        update() {
            const self = this;
            let selectedId = $("input[name='selectedId']").val();
            let points = $("input[name='points']").val();

            $.ajax({
                url: '../PHP/backStage/points/pointsUpdate.php',
                type: 'POST',
                data: { points, selectedId },
                success: function (res) {
                    self.pointsUpdating = res;
                    console.log(res)
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
                dataType: "text",
            });
        },

        uploadCSV() {
            var formData = new FormData();

            formData.append('file', document.getElementById(
                'csvFile'
            ).files[0], document.getElementById(
                'csvFile'
            ).files[0].name);
            // console.log(document.getElementById(
            //     'csvFile'
            // ).files[0])
            // formData.append('abc', '234234')

            // fetch('../PHP/backStage/points/pointsImport.php', {
            //     method: 'POST',
            //     body: formData
            // }).then(res => {
            //     console.log(res);

            // }).then(json => {
            //     console.log(json);

            // })
            //     .catch(error => console.log(error))




            $.ajax({
                url: '../PHP/backStage/points/pointsImport.php',
                method: 'POST',
                // dataType: 'json',
                processData: false,
                headers: {
                    contentType: '"multipart/form-data'
                },
                contentType: false,
                data: formData,
                success: function (res) {
                    alert("ya");
                    console.log(res);
                    // console.log(uploadFile);
                },
                error: function (res) {
                    alert("no");
                    console.log(res);
                    // console.log(uploadFile);
                }
            });

        },

        switchTab01() {
            this.showTab = true;

            let tabs = document.querySelectorAll(".pointsDataFilterTab");
            let tab01 = document.querySelector("#pointsDataFilterTab01");

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("tabActive");
            }
            tab01.classList.add("tabActive");
        },

        switchTab02() {
            this.showTab = false;

            let tabs = document.querySelectorAll(".pointsDataFilterTab");
            let tab02 = document.querySelector("#pointsDataFilterTab02");

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("tabActive");
            }
            tab02.classList.add("tabActive");
        },

        backToPreviousPage() {
            this.query();
        }

    }
});
