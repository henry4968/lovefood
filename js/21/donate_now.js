// 捐款表單頁

document.addEventListener("DOMContentLoaded", function () {

    // 信用卡卡號 
    var cards = document.getElementsByClassName("form-text-input-four");
    for (let i = 0; i < cards.length; i++) {
        // keydown 刪除倒退前一格
        cards[i].addEventListener("keydown", function (e) {
            if ((e.which >= 48 && e.which <= 57) || e.which == 8) {

                if (e.target.value.length == 0 && e.which == 8) {
                    let previous_el = this.previousElementSibling.previousElementSibling
                        ;
                    if (previous_el != null) {
                        previous_el.focus();
                    }
                }

            } else {
                e.preventDefault();
            }
        });
        // keyup 自動tab到下一格
        cards[i].addEventListener("keyup", function (e) {
            let str = (e.target.value).replace(/\D/g, "");
            e.target.value = str;
            if (str.length == 4) {
                let next_el = this.nextElementSibling.nextElementSibling;
                if (next_el != null) {
                    next_el.focus();
                }
            }
        });
    }


    // 勾選確認閱讀submit鍵會變色且才能送出

    let finalcheck = document.querySelector('#finalcheck');
    finalcheck.addEventListener('change', function () {
        if (finalcheck.checked) {
            $('#sendButton').addClass('allow').css({
                'background-color': '#B2C6A6',
                'cursor': 'pointer'
            }).attr('disabled', false)
        } else {
            $('#sendButton').removeClass('allow').css({
                'background-color': '#DEDEDE',
                'cursor': 'not-allowed'
            }).attr('disabled', true)
        }
    });

    // 捐款收據選擇每次寄發，收據抬頭 & 身分證/統一編號 
    $('#receiptRadio1').on('click', function () {
        $('.headup').children('div').remove();
        $('.headup').removeClass('formlabel-active');
    });
    $('#receiptRadio2').on('click', function () {
        if ($('.headup').children().length < 2) {
            $('.headup').prepend(`<div class="starTxt">*</div>`);
        }
    });

    // 按reset鍵移除必填
    $('#cleanButton').on('click', function () {
        // alert("yes!!");
        $('.formlabel').removeClass('formlabel-active');
    });

});


// 點擊帶入數字且變色
$(function () {
    let money = $('.form-money-box').find('.money-box');
    // console.log(money[0]);
    money.eq(0).on('click', function (e) {
        $('#amounttext').val('500');
        money.css('background-color', 'white').css('color', '#B2C6A6')
        $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
    })
    money.eq(1).on('click', function (e) {
        $('#amounttext').val('1000');
        money.css('background-color', 'white').css('color', '#B2C6A6')
        $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
    })
    money.eq(2).on('click', function (e) {
        $('#amounttext').val('5000');
        money.css('background-color', 'white').css('color', '#B2C6A6')
        $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
    })
});


// 未選必填不能送出
$(function () {
    let headup_check;
    $('#sendButton').on('click', function (e) {
        e.preventDefault();
        let donationPlan = $("[name='donationPlan']:checked").val();
        let donationMethod = $("[name='donationMethod']:checked").val();
        let amount = $("[name='amount']").val();
        let name = $("[name='name']").val();
        let email = $("[name='email']").val();
        let cardType = $("[name='cardType']:checked").val();
        let cardName = $("[name='cardName']").val();
        let cardNumberLine = $("[name='cardNumberLine']").val();
        let cardDate = $("[name='cardDate']").val();
        // let cardYear = $("[name='cardYear']").val();
        let cardThree = $("[name='cardThree']").val();
        let deliveryMethod = $("[name='deliveryMethod']:checked").val();
        let receiptTitle = $("[name='receiptTitle']").val();
        let receipt_pID_tID = $("[name='receipt_pID_tID']").val();
        let check = $("[name='check']:checked").val();
        let finalcheck = document.querySelector('#finalcheck');
        let receiptRadio1 = document.querySelector('#receiptRadio1');
        let receiptRadio2 = document.querySelector('#receiptRadio2');
        // console.log(receiptRadio1, receiptRadio2);
        // console.log($('.fsormlabel').eq(18));
        // console.log($('.form-checkbox-label'));
        // console.log(email);

        if (donationPlan == null) {
            $('.formlabel').eq(0).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(0).removeClass('formlabel-active')
        }
        if (donationMethod == null) {
            $('.formlabel').eq(1).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(1).removeClass('formlabel-active')
        }

        if (amount == '') {
            $('.formlabel').eq(2).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(2).removeClass('formlabel-active')
        }

        if (name == '') {
            $('.formlabel').eq(4).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(4).removeClass('formlabel-active')
        }

        if (email == '') {
            $('.formlabel').eq(9).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(9).removeClass('formlabel-active')
        }

        if (cardType == null) {
            $('.formlabel').eq(12).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(12).removeClass('formlabel-active')
        }

        if (cardName == '') {
            $('.formlabel').eq(13).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(13).removeClass('formlabel-active')
        }

        if (cardNumberLine == '') {
            $('.formlabel').eq(14).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(14).removeClass('formlabel-active')
        }

        if (cardDate == '') {
            $('.formlabel').eq(15).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(15).removeClass('formlabel-active')
        }

        // if (cardYear == '') {
        //     $('.formlabel').eq(15).addClass('formlabel-active').attr('data-content', '此欄為必填')
        // } else {
        //     $('.formlabel').eq(15).removeClass('formlabel-active')
        // }

        if (cardThree == '') {
            $('.formlabel').eq(16).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(16).removeClass('formlabel-active')
        }

        if (deliveryMethod == null) {
            $('.formlabel').eq(17).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(17).removeClass('formlabel-active')
        }

        if (receiptRadio2.checked) {
            if (receiptTitle == '') {
                $('.formlabel').eq(18).addClass('formlabel-active').attr('data-content', '此欄為必填')
            } else {
                $('.formlabel').eq(18).removeClass('formlabel-active')
            }

            if (receipt_pID_tID == '') {
                $('.formlabel').eq(19).addClass('formlabel-active').attr('data-content', '此欄為必填')
            } else {
                $('.formlabel').eq(19).removeClass('formlabel-active')
            }
            headup_check = false;
        } else {
            headup_check = true;
        }



        if (cardNumberLine != '' && deliveryMethod != '' && cardThree != '' && cardDate != '' && cardName != '' && cardType != '' && email != '' && name != '' && amount != '' && donationMethod != '' && donationPlan != '' && deliveryMethod != '' && (headup_check == true || (receiptTitle != '' && receipt_pID_tID != ''))) {
            // console.log('ok');
            $('form').submit();
        }



    });

    // 展示用帶入
    $('#show1').on('click', function () {
        // alert("yes!!");
        $("[name='name']").val("黃曉姬");
        $("[name='email']").val("chickenhuang@gmail.com");
    })

    $('#show2').on('click', function () {
        // alert("yes!!");
        $("[name='cardType']").val(2).attr("checked", true);
        $("[name='cardName']").val("黃曉姬");
        $("[name='cardNumberLine']").eq(0).val("4311");
        $("[name='cardNumberLine']").eq(1).val("2312");
        $("[name='cardNumberLine']").eq(2).val("0288");
        $("[name='cardNumberLine']").eq(3).val("1164");
        $("[name='cardDate']").eq(0).val(12);
        $("[name='cardDate']").eq(1).val(22);
        $("[name='cardThree']").val(132);

    });

    $('#show3').on('click', function () {
        // alert("yes!!");
        $("[name='receiptTitle']").val("黃曉姬");
        $("[name='receipt_pID_tID']").val("C181714206");
    })

});


/* back to top JS */

$(document).ready(function () {
    $('a.back_to_top').click(function (e) {
        $('html, body').animate({ scrollTop: 0 }, '1000');
        e.preventDefault();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back_to_top').fadeIn('2000');
        } else {
            $('.back_to_top').fadeOut('500');
        }
    });
});


// 桌機板search bar js
$(document).ready(function (e) {
    $("#navIcons01").click(function () {
    });

    $("#navIcons01").focus(function () {
        $("#searchInputForWeb").addClass('block');
        $("#searchInputForWeb").focus();
    })
    $("#navIconsImg").focus(function () {
        $("#searchInputForWeb").addClass('block');
        $("#searchInputForWeb").focus();
    })
    $("#searchInputForWeb").focus(function () {
        $("#searchInputForWeb").addClass('block');
        $("#searchInputForWeb").focus();
    })
    $("#searchInputForWeb").blur(function () {
        $("#searchInputForWeb").removeClass('block');

    });

});

const app = new Vue({
    el: '#main',
    data: {
    },

    mounted() {

        const self = this;

        $.ajax({
            url: '../PHP/Frontend/donationQuery.php',
            success: function (res) {
                console.log(res);
                document.cookie = res;
            },
            dataType: "JSON",
            error: function (res) {
                console.log(res);
            }
        })
    },

});