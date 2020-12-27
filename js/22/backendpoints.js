Vue.component('user', {
    template: `
    <div>
        <li>{{user}}</li>
    </div>
    `,
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user = $.cookie('account');
    }
})

const app = new Vue({
    el: '.containerPoints',
    data: {
        pointsIssuance: null,
        pointsDiscount: null,
        pointsOfMember: null,
        issuanceLog: null,
        discountLog: null,
        ShowFinalPoints: null,
        showTab: true,
        showIssuanceDetails: false,
        showUsingDetails: false,
        uploadCSVLog: null,
        pageView: null,
        pageNow: null,
    },

    mounted() {
        const self = this;

        this.showIssuanceDetails = false;
        this.showUsingDetails = false;

        let id = $("input[name='id']").val();
        let account = $("input[name='account']").val();
        let name = $("input[name='name']").val();
        let phone = $("input[name='phone']").val();
        let dateStart = $("input[name='dateStart']").val();
        let dateEnd = $("input[name='dateEnd']").val();

        $.ajax({
            url: '../PHP/backStage/points/pointsQuery.php',
            type: 'POST',
            dataType: "JSON",
            data: { id, account, name, phone, dateStart, dateEnd },
            success: function (res) {
                self.pointsIssuance = res.pointsIssuance;
                self.pointsDiscount = res.pointsDiscount;
                self.pointsOfMember = res.pointsOfMember;
                self.issuanceLog = res.issuanceLog;
                self.discountLog = res.discountLog;

                var rMB = res.pointsOfMember;
                var rPI = res.pointsIssuance;
                var rPD = res.pointsDiscount;
                var rIL = res.issuanceLog;
                var rDL = res.discountLog;

                for (let i = 0; i < rPI.length; i++) {
                    for (let j = 0; j < rMB.length; j++) {
                        if (rMB[j].MEMBER_ID == rPI[i].MEMBER_ID_for_PI) {
                            rMB[j].TOTAL_ISSUANCE = rPI[i].TOTAL_ISSUANCE;
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
        });

        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            success: function (res) {
                $.cookie('account', `${res}`, 3);
                self.loginAccount = res;

                if (res != 'SP0001') {
                    console.log(self.loginAccount);
                    location.href = "../frontend/signUp_signIn.html";
                    alert('尚未登入請重新登入');
                } else if (res == '') {
                    location.href = "../frontend/signUp_signIn.html";
                    alert('尚未登入請重新登入');
                }
            },
            dataType: "text",
            error: function (res) {
                console.log(res);
            }
        });

    },

    methods: {

        showIssuanceLog(e) {
            const self = this;

            this.showIssuanceDetails = true;

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
                    self.issuanceLog = res.issuanceLog;
                    self.discountLog = res.discountLog;
                    self.pointsOfMember = res.pointsOfMember;

                    self.pageView = res.issuanceLog.filter(function (item, index, array) {
                        return index < 5;
                    })
                    pageNow = 0;
                    setTimeout(() => {
                        $('#pagination').find('a').eq(1).css({
                            backgroundColor: '#887664',
                            color: '#FFF'
                        })
                    }, 1);

                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },

            });

        },

        showUsingLog(e) {
            const self = this;

            this.showUsingDetails = true;

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
                    self.issuanceLog = res.issuanceLog;
                    self.discountLog = res.discountLog;
                    self.pointsOfMember = res.pointsOfMember;
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },

            });

        },

        queryPoints() {
            const self = this;

            this.showUsingDetails = false;
            this.showIssuanceDetails = false;

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
                    self.pointsIssuance = res.pointsIssuance;
                    self.pointsDiscount = res.pointsDiscount;
                    self.pointsOfMember = res.pointsOfMember;
                    self.issuanceLog = res.issuanceLog;
                    self.discountLog = res.discountLog;

                    let rMB = res.pointsOfMember;
                    let rPI = res.pointsIssuance;
                    let rPD = res.pointsDiscount;
                    let rIL = res.issuanceLog;
                    let rDL = res.discountLog;

                    for (let i = 0; i < rPI.length; i++) {

                        for (let j = 0; j < rMB.length; j++) {
                            if (rMB[j].MEMBER_ID == rPI[i].MEMBER_ID_for_PI) {
                                rMB[j].TOTAL_ISSUANCE = rPI[i].TOTAL_ISSUANCE;
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

        updatePoints() {
            const self = this;

            let selectedId = $("input[name='selectedId']").val();
            let points = $("input[name='points']").val();
            let points01 = $("input[name='points01']").val();
            let points02 = $("input[name='points02']").val();
            let updatePointsInput = document.getElementsByClassName("updatePointsInput");

            $.ajax({
                url: '../PHP/backStage/points/pointsUpdate.php',
                type: 'POST',
                data: { points, points01, points02, selectedId },
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

            if (points01) {
                this.pointsOfMember[0].MEMBER_POINTS = points01;
            } else if (points02) {
                this.pointsOfMember[0].MEMBER_POINTS = points02;
            }


            for (let i = 0; i < updatePointsInput.length; i++) {
                updatePointsInput[i].value = "";
            }



        },

        uploadCSV() {
            const self = this;

            var fileData = $('#csvFileInput').prop('files')[0];
            var formData = new FormData();

            if (fileData == undefined) {
                alert("請先選擇檔案！");
            }

            formData.append('csvFileInput', fileData, 'csvFileInput');

            console.log(fileData);
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }

            $.ajax({
                url: '../PHP/backStage/points/pointsImport.php',
                method: 'POST',
                processData: false,
                contentType: false,
                data: formData,
                dataType: 'JSON',
                success: function (res) {
                    alert("上傳成功！");
                    self.uploadCSVLog = res;
                    console.log(res);
                },
                error: function (res) {
                    alert("上傳失敗！請檢察控制台日誌訊息。");
                    console.log(res.responseText);
                }
            });

        },

        showFileName() {

            let csvFileInput = document.querySelector("#csvFileInput");
            let labelForCSVFileInput = document.querySelector("#labelForCSVFileInput");

            labelForCSVFileInput.innerHTML = csvFileInput.value.replace("C:\\fakepath\\", "已選擇：");
        },

        pageChange(page) {
            //==============標記當前在第幾頁=============
            const self = this;
            if (self.pageNow == 0) {
                page = pageNow + 1;
            }
            //==============直接換頁=============
            if (page > 0) {
                self.pageView = self.issuanceLog.filter(function (item, index, array) {
                    return index >= 5 * (page - 1) && index < 5 * (page);
                })
                pageNow = page - 1;
                //頁碼變色
                $('#pagination').find('a').css({
                    backgroundColor: 'transparent',
                    color: '#887664'
                })
                $('#pagination').find('a').eq(`${page}`).css({
                    backgroundColor: '#887664',
                    color: '#FFF'
                })
                //==============上一頁=============
            } else if (page == 0) {
                //    alert('這是page前'+page)
                //    alert('這是pageNow'+pageNow)
                if (pageNow == 0) { //已經在最前頁
                    alert('當前已是最前頁，無法繼續後退');
                } else {
                    //頁碼變色
                    $('#pagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#pagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index >= 5 * (pageNow - 1) && index < 5 * (pageNow);
                    })
                    pageNow = pageNow - 1;
                }
                //==============下一頁=============
            } else if (page == 'next') {
                alert('這是page後' + page)
                alert('這是pageNow' + pageNow)
                if (pageNow == Math.floor(self.tableData.length / 5) - 1) {
                    alert('當前已是最末頁，無法繼續前進');
                } else {
                    //頁碼變色
                    $('#pagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#pagination').find('a').eq(`${pageNow + 2}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index >= 5 * (pageNow + 1) && index < 5 * (pageNow + 2);
                    })
                    pageNow = pageNow + 1;
                }
            }
            console.log(self.pageView);
        },

    }
});
