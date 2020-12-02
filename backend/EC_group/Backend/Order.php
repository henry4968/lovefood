<?php
    include("LoginCheck.php");

    //建立SQL
    $sql = "SELECT ec_orders.*, ec_members.Account FROM ec_orders JOIN ec_members on ec_orders.MID = ec_members.ID ORDER BY ec_orders.ID DESC";

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
                <font size="5">EC訂單管理</font>
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
                        <td></td>
                        <td align="right"><input type="button" value="帳號登出" onclick="javascript: location.href = 'Logout.php';" /></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table align="center" letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1">
                                <tr style="background-color:#FFF0F5;">
                                    <td align="center">流水號</td>
                                    <td align="center">會員帳號</td> 
                                    <td align="center">訂單編號</td>                                    
                                    <td align="center">金額</td>
                                    <td align="center">日期</td>
                                    <td align="center"></td>
                                </tr>

                                <?php
                                    foreach($data as $index => $row){
                                ?>

                                <tr>
                                    <td align="center"><?=$row["ID"] ?></td>
                                    <td align="center"><?=$row["Account"] ?></td>
                                    <td align="center"><?=$row["OrderNumber"] ?></td>                                    
                                    <td align="center"><?=$row["Amount"] ?></td>
                                    <td align="center"><?=$row["CreateDate"] ?></td>                                                               
                                    <td align="center">
                                        <a href="OrderDetail.php?OID=<?=$row["ID"] ?>">明細</a>
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