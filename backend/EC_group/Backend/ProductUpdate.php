<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL---->產品----------------------
    $sql = "SELECT * FROM ec_products WHERE ID = ?";
    //執行
    $statement = $Util->getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1 , $_GET["PID"]);    
    $statement->execute();
    $data = $statement->fetchAll();    

    //建立SQL---->產品分類------------------
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
    }
</script>

<body bgcolor="#ffffff" leftmargin="0" marginwidth="0" topmargin="30" align="center">
    <tr>
        <td>修改商品</td>
    </tr>

    <form method="post" action="ProductUpdateR.php" enctype="multipart/form-data">

        <?php
            foreach($data as $index => $row){
        ?>

        <tr>
            <td>

                <table letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1" align="center">
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">分類</td>
                        <td align="center">
                            <select id="Category" name="Category">
                                <option value="">請選擇</option>
                                <?php
                                    foreach($cate_data as $index2 => $row2){
                                        $selected = "";
                                        if($row["CateID"] == $row2["ID"]){
                                            $selected = "selected";
                                        }
                                ?>
                                    <option value="<?=$row2["ID"] ?>" <?=$selected ?>><?=$row2["Name"] ?></option>
                                <?php 
                                    }
                                ?>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">商品名稱</td>
                        <td align="center"><input type="text" id="ProductName" name="ProductName" value="<?=$row["ProductName"] ?>"/></td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">商品金額</td>
                        <td align="center"><input type="text" id="Price" name="Price" value="<?=$row["Price"] ?>"/></td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">狀態</td>
                        <td align="center">
                            <?php
                                //Status狀態 0:刪除, 1:下架, 2:上架
                                $checked1 = "";
                                $checked2 = "";
                                switch($row["Status"]){
                                    case 1: 
                                        $checked2 = "checked"; 
                                        break;
                                    case 2: 
                                        $checked1 = "checked";
                                        break;
                                }
                            ?>
                            <input type="radio" name="Status" value="2" <?=$checked1 ?>/>上架
                            &nbsp;&nbsp;
                            <input type="radio" name="Status" value="1" <?=$checked2 ?>/>下架
                        </td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">商品圖</td>
                        <td align="center">
                            <img src='../Upload/<?=$row["PictureName"] ?>' width="200"/><br/>
                            <input type="file" name="ProductImage" />

                            <!-- PK和圖片名稱不顯示，需POST到UpdateR.php -->
                            <input type="hidden" name="PID" value="<?=$row["ID"] ?>"/>
                            <input type="hidden" name="PictureName" value="<?=$row["PictureName"] ?>"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <?php
            }
        ?>

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