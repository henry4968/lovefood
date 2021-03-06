$(function () {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function () {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });

    confirmButton.click(function (e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if (owner.val().length < 5) {
            alert("請輸入持卡人姓名");
        } else if (!isCardValid) {
            alert("請輸入正確信用卡卡號");
        } else if (!isCvvValid) {
            alert("請輸入驗證碼");
        } else {
            // Everything is correct. Add your form submission code here.
            alert("Everything is correct");

            $("div.overlay").addClass("-on");
            // 關閉 Modal
            $("button.btn_modal_close").on("click", function () {
                $("div.overlay").addClass("-opacity-zero");

                setTimeout(function () {
                    $("div.overlay").removeClass("-on -opacity-zero");
                }, 1000);
                
                // 點擊其他地方關閉 Madal
                $("div.overlay").on("click", function () {
                    $("div.overlay").removeClass("-on -opacity-zero");
                });
            });
        }

        // if () {
        // 開啟 Modal 彈跳視窗



        // $("button.btn_modal").on("click", function () {

        // });



        // 設定隔一秒後，移除相關 class




        // }
    });
});


