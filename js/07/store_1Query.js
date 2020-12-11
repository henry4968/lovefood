
$(document).ready(function(){

        $('#btn1').click(function(){
            
            // ================區域選擇=================
            let itemsDist = $('.item1').find('input');
            console.log(itemsDist);
            var arrDist = new Array();

            for(i=0;i<itemsDist.length;i++){

                distChecked = $(`input[name="dist1[${i}]"]:checked`).val();

                
                if(distChecked != null){
                    arrDist.push(distChecked);
                }
            }  
            console.log(arrDist);
            // ================種類選擇=================

            let itemsCate = $('.item3').find('input');
            console.log(itemsCate);
            var arrCate = new Array();

            for(i=0;i<itemsCate.length;i++){

                cateChecked = $(`input[name="categaries1[${i}]"]:checked`).val();

                
                if(cateChecked != null){
                    arrCate.push(cateChecked);
                }
            }  
            // console.log(arrCate);

            // ================商家選擇=================




            $.ajax({
                url: '../PHP/Frontend/EC_07/filter.php',  //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                type: 'POST',
                data: { arrCate,arrDist },
                success: function (res) {
                    console.log(res);
                },
                error: function (res) {
                    console.log(res);
                },
                dataType: "JSON",
                // dataType: "html",
                // dataType: "text",
            })

        })
    });
