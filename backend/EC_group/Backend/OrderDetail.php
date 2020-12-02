<?php
    include("LoginCheck.php");

    $orderID = isset($_GET["OID"]) ? $_GET["OID"] : "";

    //建立SQL
    $sql = "SELECT ec_car.ID as CarID, ec_products.ID as PID, ec_car.MID, ec_car.QTY, ec_products.ProductName, ec_products.Price, ec_products.PictureName FROM ec_car INNER JOIN ec_products ON ec_car.PID = ec_products.ID where ec_car.OID = ?";
    
    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , $orderID);    
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
                <font size="5">EC訂單管理</font>
            </td>
        </tr>

        <tr>
            <td colspan="2" height="15"><br /></td>
        </tr>

        <tr>
            <td colspan="2" align="center">
                <table>
                    <tr>
                        <td></td>
                        <td align="right"></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table align="center" letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1">
                                <tr style="background-color:#FFF0F5;">
                                    <td align="center">商品圖</td>
                                    <td align="center">商品名稱</td>                                    
                                    <td align="center">數量</td>
                                </tr>

                                <?php
                                    foreach($data as $index => $row){
                                ?>

                                <tr>
                                    <td><img src="../Upload/<?=$row["PictureName"] ?>" width="100" height="100"></td>
						            <td><?=$row["ProductName"] ?></td>
						            <td><?=$row["QTY"] ?></td>                                   
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