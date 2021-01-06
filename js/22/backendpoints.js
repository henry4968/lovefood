// const { NULL } = require("node-sass");

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
        membersListPageView: null,
        singleDiscountPageView: null,
        singleIssuancePageView: null,
        batchIssuancePageView: null,
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

                self.membersListPageView = self.pointsOfMember.filter(function (item, index, array) {
                    return index < 10;
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

    updated() {

        $('.issuancePointsInput').focus(function () {
            $('.cutPointsInput').val("");
        });

        $('.cutPointsInput').focus(function () {
            $('.issuancePointsInput').val("");
        });

        $('#issuancePointsInput01').keyup(function () {
            let n = parseInt($('#issuancePointsInput01').val(), 10);
            if (n < 0) {
                $('#issuancePointsInput01').val(0);
            }
            if (n > 3000) {
                $('#issuancePointsInput01').val(3000);
            }
        });

        $('#cutPointsInput01').keyup(function () {
            let n01 = parseInt($('#cutPointsInput01').val(), 10);
            let n02 = parseInt($('#pointsOfMember01').val(), 10);
            if (n01 < 0) {
                $('#cutPointsInput01').val(0);
            }
            if (n01 > n02) {
                $('#cutPointsInput01').val(n02);
            }
        });

        $('#issuancePointsInput02').keyup(function () {
            let n = parseInt($('#issuancePointsInput02').val(), 10);
            if (n < 0) {
                $('#issuancePointsInput02').val(0);
            }
            if (n > 3000) {
                $('#issuancePointsInput02').val(3000);
            }
        });

        $('#cutPointsInput02').keyup(function () {
            let n01 = parseInt($('#cutPointsInput02').val(), 10);
            let n02 = parseInt($('#pointsOfMember02').val(), 10);
            if (n01 < 0) {
                $('#cutPointsInput02').val(0);
            }
            if (n01 > n02) {
                $('#cutPointsInput02').val(n02);
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

                    self.singleIssuancePageView = res.issuanceLog.filter(function (item, index, array) {
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

                    self.singleDiscountPageView = res.discountLog.filter(function (item, index, array) {
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

        queryPoints() {
            const self = this;

            this.showUsingDetails = false;
            this.showIssuanceDetails = false;
            $(".issuancePointsInput").val("");
            $(".cutPointsInput").val("");

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

                    self.membersListPageView = self.pointsOfMember.filter(function (item, index, array) {
                        return index < 10;
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
                    console.log(res.responseText);
                },
                dataType: "JSON",
            });
        },

        issuancePoints() {
            const self = this;

            let selectedId = $("input[name='selectedId']").val();
            let points01 = $("input[name='points01']").val();
            let points02 = $("input[name='points02']").val();
            let issuancePointsInput = document.getElementsByClassName("issuancePointsInput");

            $.ajax({
                url: '../PHP/backStage/points/pointsIssuance.php',
                type: 'POST',
                data: { points01, points02, selectedId },
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

            if (points01 == "" && points02 == "") {
                alert("請輸入發放點數！");
            }

            if (points01) {
                this.pointsOfMember[0].MEMBER_POINTS = parseInt(this.pointsOfMember[0].MEMBER_POINTS) + parseInt(points01);
            } else if (points02) {
                this.pointsOfMember[0].MEMBER_POINTS = parseInt(this.pointsOfMember[0].MEMBER_POINTS) + parseInt(points02);
            }

            for (let i = 0; i < issuancePointsInput.length; i++) {
                issuancePointsInput[i].value = "";
            }

        },

        cutPoints() {
            const self = this;

            let selectedId = $("input[name='selectedId']").val();
            let points03 = $("input[name='points03']").val();
            let points04 = $("input[name='points04']").val();
            let cutPointsInput = document.getElementsByClassName("cutPointsInput");

            $.ajax({
                url: '../PHP/backStage/points/pointsCut.php',
                type: 'POST',
                data: { points03, points04, selectedId },
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

            if (points03 == "" && points04 == "") {
                alert("請輸入刪減點數！");
            }

            if (points03) {
                this.pointsOfMember[0].MEMBER_POINTS = parseInt(this.pointsOfMember[0].MEMBER_POINTS) - parseInt(points03);
            } else if (points04) {
                this.pointsOfMember[0].MEMBER_POINTS = parseInt(this.pointsOfMember[0].MEMBER_POINTS) - parseInt(points04);
            }

            for (let i = 0; i < cutPointsInput.length; i++) {
                cutPointsInput[i].value = "";
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

                    self.batchIssuancePageView = self.uploadCSVLog.filter(function (item, index, array) {
                        return index < 10;
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

        membersListPageChange(page) {
            //==============標記當前在第幾頁=============
            const self = this;
            if (self.pageNow == 0) {
                page = pageNow + 1;
            }
            //==============直接換頁=============
            if (page > 0) {
                self.membersListPageView = self.pointsOfMember.filter(function (item, index, array) {
                    return index >= 10 * (page - 1) && index < 10 * (page);
                })
                pageNow = page - 1;
                //頁碼變色
                $('#membersListPagination').find('a').css({
                    backgroundColor: 'transparent',
                    color: '#887664'
                })
                $('#membersListPagination').find('a').eq(`${page}`).css({
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
                    $('#membersListPagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#membersListPagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.membersListPageView = self.tableData.filter(function (item, index, array) {
                        return index >= 10 * (pageNow - 1) && index < 10 * (pageNow);
                    })
                    pageNow = pageNow - 1;
                }
                //==============下一頁=============
            } else if (page == 'next') {
                alert('這是page後' + page)
                alert('這是pageNow' + pageNow)
                if (pageNow == Math.floor(self.tableData.length / 10) - 1) {
                    alert('當前已是最末頁，無法繼續前進');
                } else {
                    //頁碼變色
                    $('#membersListPagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#membersListPagination').find('a').eq(`${pageNow + 2}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.membersListPageView = self.tableData.filter(function (item, index, array) {
                        return index >= 10 * (pageNow + 1) && index < 10 * (pageNow + 2);
                    })
                    pageNow = pageNow + 1;
                }
            }
            console.log(self.membersListPageView);
        },

        singleDiscountpageChange(page) {
            //==============標記當前在第幾頁=============
            const self = this;
            if (self.pageNow == 0) {
                page = pageNow + 1;
            }
            //==============直接換頁=============
            if (page > 0) {
                self.singleDiscountPageView = self.discountLog.filter(function (item, index, array) {
                    return index >= 5 * (page - 1) && index < 5 * (page);
                })
                pageNow = page - 1;
                //頁碼變色
                $('#singleDiscountPagination').find('a').css({
                    backgroundColor: 'transparent',
                    color: '#887664'
                })
                $('#singleDiscountPagination').find('a').eq(`${page}`).css({
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
                    $('#singleDiscountPagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#singleDiscountPagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.singleDiscountPageView = self.tableData.filter(function (item, index, array) {
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
                    $('#singleDiscountPagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#singleDiscountPagination').find('a').eq(`${pageNow + 2}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.singleDiscountPageView = self.tableData.filter(function (item, index, array) {
                        return index >= 5 * (pageNow + 1) && index < 5 * (pageNow + 2);
                    })
                    pageNow = pageNow + 1;
                }
            }
            console.log(self.singleDiscountPageView);
        },

        singleIssuancePageChange(page) {
            //==============標記當前在第幾頁=============
            const self = this;
            if (self.pageNow == 0) {
                page = pageNow + 1;
            }
            //==============直接換頁=============
            if (page > 0) {
                self.singleIssuancePageView = self.issuanceLog.filter(function (item, index, array) {
                    return index >= 5 * (page - 1) && index < 5 * (page);
                })
                pageNow = page - 1;
                //頁碼變色
                $('#singleIssuancePagination').find('a').css({
                    backgroundColor: 'transparent',
                    color: '#887664'
                })
                $('#singleIssuancePagination').find('a').eq(`${page}`).css({
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
                    $('#singleIssuancePagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#singleIssuancePagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.singleIssuancePageView = self.tableData.filter(function (item, index, array) {
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
                    $('#singleIssuancePagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#singleIssuancePagination').find('a').eq(`${pageNow + 2}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.singleIssuancePageView = self.tableData.filter(function (item, index, array) {
                        return index >= 5 * (pageNow + 1) && index < 5 * (pageNow + 2);
                    })
                    pageNow = pageNow + 1;
                }
            }
            console.log(self.singleIssuancePageView);
        },

        batchIssuancePageChange(page) {
            //==============標記當前在第幾頁=============
            const self = this;
            if (self.pageNow == 0) {
                page = pageNow + 1;
            }
            //==============直接換頁=============
            if (page > 0) {
                self.batchIssuancePageView = self.uploadCSVLog.filter(function (item, index, array) {
                    return index >= 10 * (page - 1) && index < 10 * (page);
                })
                pageNow = page - 1;
                //頁碼變色
                $('#batchIssuancePagination').find('a').css({
                    backgroundColor: 'transparent',
                    color: '#887664'
                })
                $('#batchIssuancePagination').find('a').eq(`${page}`).css({
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
                    $('#batchIssuancePagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#batchIssuancePagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.batchIssuancePageView = self.tableData.filter(function (item, index, array) {
                        return index >= 10 * (pageNow - 1) && index < 10 * (pageNow);
                    })
                    pageNow = pageNow - 1;
                }
                //==============下一頁=============
            } else if (page == 'next') {
                alert('這是page後' + page)
                alert('這是pageNow' + pageNow)
                if (pageNow == Math.floor(self.tableData.length / 10) - 1) {
                    alert('當前已是最末頁，無法繼續前進');
                } else {
                    //頁碼變色
                    $('#batchIssuancePagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#batchIssuancePagination').find('a').eq(`${pageNow + 2}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.batchIssuancePageView = self.tableData.filter(function (item, index, array) {
                        return index >= 10 * (pageNow + 1) && index < 10 * (pageNow + 2);
                    })
                    pageNow = pageNow + 1;
                }
            }
            console.log(self.batchIssuancePageView);
        },

    }
});
