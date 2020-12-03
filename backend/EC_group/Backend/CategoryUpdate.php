<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "SELECT * FROM ec_category WHERE ID = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , $_GET["CID"]);    
    $statement->execute();
    $data = $statement->fetchAll();    
?>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>EC管理後台</title>
</head>
<script type="text/javascript">
    function doSubmit() {
        //判斷CateName是否有值?
        if (document.getElementById('CateName').value == '') {
            alert("請填寫[分類名稱]");
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
        <td>修改分類</td>
    </tr>

    <form method="post" action="CategoryUpdateR.php">

        <?php
            foreach($data as $index => $row){
        ?>

        <tr>
            <td>

                <table letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1" align="center">
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">分類名稱</td>
                        <td align="center"><input type="text" id="CateName" name="CateName" value="<?=$row["Name"] ?>"/></td>
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

                            <!-- PK和圖片名稱不顯示，需POST到UpdateR.php -->
                            <input type="hidden" name="CID" value="<?=$row["ID"] ?>"/>
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