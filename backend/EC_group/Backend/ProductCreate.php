<?php
    include("LoginCheck.php");

    //建立SQL
    $sql = "SELECT * FROM ec_category WHERE Status = 2 ORDER BY ID DESC";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->execute();
    $cate_data = $statement->fetchAll();
?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>EC管理後台</title>
</head>
<script type="text/javascript">
    function doSubmit() {
        if (document.getElementById('Category').value == '') {
            alert("請選擇[分類]");
            return false;
        }
        if (document.getElementById('ProductName').value == '') {
            alert("請填寫[商品名稱]");
            return false;
        }
        if (document.getElementById('Price').value == '') {
            alert("請填寫[商品金額]");
            return false;
        }

        //判斷Status(radio button)是否有值?
        var isChecked = false;
        var obj = document.getElementsByName('Status');    
        for(var i=0; i< obj.length; i++){
            if (obj[i].checked) {
                isChecked = true;
            }
        }    
        if(!isChecked){
            alert("請選擇[狀態]");
            return false;
        }

        if (document.getElementById('ProductImage').value == '') {
            alert("請選擇[商品圖片]");
            return false;
        }
    }
</script>

<body bgcolor="#ffffff" leftmargin="0" marginwidth="0" topmargin="30" align="center">
    <tr>
        <td>新增商品</td>
    </tr>

    <form method="post" action="ProductCreateR.php" enctype="multipart/form-data">

        <tr>
            <td>

                <table letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1" align="center">
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">分類</td>
                        <td align="center">
                            <select id="Category" name="Category">
                                <option value="">請選擇</option>
                                <?php
                                    foreach($cate_data as $index => $row){
                                ?>
                                    <option value="<?=$row["ID"] ?>"><?=$row["Name"] ?></option>
                                <?php 
                                    }
                                ?>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">商品名稱</td>
                        <td align="center"><input type="text" id="ProductName" name="ProductName" /></td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">商品金額</td>
                        <td align="center"><input type="text" id="Price" name="Price" /></td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">狀態</td>
                        <td align="center">
                            <input type="radio" name="Status" value="2" checked/>上架
                            &nbsp;&nbsp;
                            <input type="radio" name="Status" value="1"/>下架
                        </td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">商品圖</td>
                        <td align="center">
                            <input type="file" id="ProductImage" name="ProductImage" />
                        </td>
                    </tr>


                </table>
            </td>
        </tr>
        <tr>
            <td align="center">
                <br>
                <input type="button" name="cancel" id="cancel" value="取消" onclick="javascript: history.go(-1);">&nbsp;&nbsp;
                <input type="submit" name="submitBtn" id="submitBtn" value="送出" onclick="return doSubmit();">
            </td>
        </tr>

    </form>

</body>

</html>