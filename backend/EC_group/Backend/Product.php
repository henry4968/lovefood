<?php
    include("LoginCheck.php");

    //建立SQL
    $sql = "SELECT ec_products.*, ec_category.Name as CateName FROM ec_products JOIN ec_category ON ec_products.CateID = ec_category.ID ORDER BY ID DESC";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->execute();
    $data = $statement->fetchAll();
?>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>EC管理後台</title>
</head>
<body>
    <table align="center">        
        <tr>
            <td colspan="2" align="center">
                <font size="5">EC商品管理</font>
            </td>
        </tr>

        <tr>
            <td colspan="2" height="15"><br /></td>
        </tr>

        <tr>
            <td width="150">
                <a href="Category.php">[商品分類管理]</a><br>
                <a href="Product.php">[商品管理]</a><br>
                <a href="Order.php">[訂單列表]</a>
            </td>
            <td width="800">
                <table>
                    <tr>
                        <td><input type="button" value="新增商品" onclick="javascript: location.href = 'ProductCreate.php';" /></td>
                        <td align="right"><input type="button" value="帳號登出" onclick="javascript: location.href = 'Logout.php';" /></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table align="center" letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1">
                                <tr style="background-color:#FFF0F5;">
                                    <td align="center">流水號</td>
                                    <td align="center">分類</td>                                    
                                    <td align="center">商品名稱</td>
                                    <td align="center">商品金額</td>
                                    <td align="center">狀態</td>
                                    <td align="center">商品圖</td>
                                    <td align="center">建立時間</td>
                                    <td align="center">更新時間</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>

                                <?php
                                    foreach($data as $index => $row){
                                ?>

                                <tr>
                                    <td align="center"><?=$row["ID"] ?></td>
                                    <td align="center"><?=$row["CateName"] ?></td>                                    
                                    <td align="center"><?=$row["ProductName"] ?></td>
                                    <td align="center"><?=$row["Price"] ?></td>
                                    <td align="center">
                                        <?php
                                            switch($row["Status"]){
                                                case 0:
                                                    echo "<font color='gray'>已刪除</font>";
                                                    break;
                                                case 1: 
                                                    echo "<font color='red'>下架</font>";
                                                    break;
                                                case 2: 
                                                    echo "<font color='green'>上架</font>";
                                                    break;
                                            }
                                        ?>
                                    </td>
                                    <td align="center">
                                        <img src='../Upload/<?=$row["PictureName"] ?>' width="200"/>
                                    </td>         
                                    <td align="center"><?=$row["CreateDate"] ?></td>
                                    <td align="center"><?=$row["UpdateDate"] ?></td>                           
                                    <td align="center">
                                        <a href="ProductUpdate.php?PID=<?=$row["ID"] ?>">修改</a>
                                    </td>
                                    <td align="center">
                                        <a href="ProductDelete.php?PID=<?=$row["ID"] ?>" onclick="javascript: if(confirm('確定刪除?')){ return true; } else { return false; }">刪除</a>
                                    </td>
                                </tr>

                                <?php   
                                    }
                                ?>

                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>