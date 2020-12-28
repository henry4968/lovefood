$(function () {
    $("[data-toggle='tooltip']").tooltip(); //tooltip啟用
    //===============input變數設變數==============
    let productName = $("[name='productName']");
    let exp0 = $("[name='exp[0]']");
    let exp1 = $("[name='exp[1]']");
    let oriPrice = $("[name='oriPrice']");
    let spePrice = $("[name='spePrice']");
    let description = $("[name='description']");


    let inputArr = [productName, exp0, exp1, oriPrice, spePrice, description];

    // document.addEventListener('click',e=>console.log(e.target));

    //==============阻止hover行為===============

    //==============點擊送出顯示tooltip===============
    $('#upload').click(function () {
        for (i = 0; i < inputArr.length; i++) {
            if (inputArr[i].val() == "") {
                console.log(inputArr[i])
                inputArr[i].tooltip('show');
                inputArr[i].css('border-color', 'red');
                inputArr[i].click(function (e) {
                    $(e.target).tooltip('hide');
                    $(e.target).css('border-color', '#ccc');

                })
            }
        }
    })
})

// ==================new Vue=========================

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
    el: '.containerProduct',
    data: {
        tableData: null,
        fileName: "",
        categories: [],
        //以下圖片for拖放區域
        imgSrc: ['', '', '', ''],
        hover: [false, false, false, false],
        dropZone: [0, 1, 2, 3],
        cover: ['封面圖片', '圖片1', '圖片2', '圖片3'],
        photo: ['photo1', 'photo2', 'photo3', 'photo4'],
        seller:'SP0001',
    },


    mounted() {
        const self = this;
        $.ajax({
            url: '../PHP/backStage/product/categories.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
            type: 'POST',
            dataType: 'JSON',
            traditional: true,
            success: function (res) {
                self.categories = res;
            },
            error: function (res) {
                console.log(res);
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
        })
    },
    methods: {

        upload() {
            confirm('確定上傳');
            const self = this;
            let sellerNum = $("input[name='sellerNum']").val();
            let categories = $("option[name='categories']:selected").val();
            let productName = $("input[name='productName']").val();
            let expDate = $("input[name='exp[0]']").val();
            let expTime = $("input[name='exp[1]']").val();
            let quantity = $("input[name='quantity']").val();
            let oriPrice = $("input[name='oriPrice']").val();
            let spePrice = $("input[name='spePrice']").val();
            let description = $("textarea[name='description']").val();
            let pickupSite = $("input[name='pickupSite']:checked").val();
            // let fileUpload = $("input[type='file']").val().replace(/C:\\fakepath\\/i, '');//去除路徑
            let fileUpload = self.imgSrc[0];
            $.ajax({

                url: '../PHP/backStage/product/newProduct.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                data: { sellerNum, categories, productName, expDate, expTime, quantity, pickupSite, fileUpload, description, oriPrice, spePrice },
                type: 'POST',
                dataType: 'text',
                traditional: true,
                success: function (res) {
                    console.log(res);
                    self.tableData = res;

                },
                error: function (res) {
                    // console.log(res);
                },
            });

        },
        imgInput(key, event) { //點擊input
            let self = this;
            let file = event.target.files[0];
            self.imgSrc.splice(key, 1, URL.createObjectURL(file))
            $(event.target).closest('.dropZone').css('border', 'none')

        },
        imgDrop(key, event) { //拖曳圖片
            let self = this;
            let readFile = new FileReader();

            let files = event.dataTransfer.files;
            readFile.readAsDataURL(files[0]);

            readFile.addEventListener('load', function () {
                // alert(this.result)
                self.imgSrc.splice(key, 1, this.result)
            })
            console.log($(event.target).closest('.dropZone'));
            $(event.target).closest('.dropZone').css('border', 'none')

        },
        remove(key, event) {
            const self = this;
            console.log(event.target.closest('.dropZone'));
            self.imgSrc.splice(key, 1, '');
            console.log($('.dropZone')[1]);
            // alert(key)
            $(event.target).closest('.dropZone').css('border', '3px dashed #897666')

        }
    },
});

