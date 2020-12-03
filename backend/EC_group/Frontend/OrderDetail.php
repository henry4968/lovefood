<?php    
    include("Header.php");
    
    //登入檢查
    if($Member->getMemberID() == ""){
        echo "<script>alert('請先登入'); location.href = 'Login.php';</script>";
        exit();
    }
    
    //取得訂單列表--------------------------------------------
    
    $orderID = isset($_GET["OID"]) ? $_GET["OID"] : "";

    //建立SQL
    $sql = "SELECT ec_car.ID as CarID, ec_products.ID as PID, ec_car.MID, ec_car.QTY, ec_products.ProductName, ec_products.Price, ec_products.PictureName FROM ec_car INNER JOIN ec_products ON ec_car.PID = ec_products.ID where ec_car.OID = ? and ec_car.MID = ? ";
    
    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , $orderID);
    $statement->bindValue(2 , $Member->getMemberID()); 
    $statement->execute();
    $data = $statement->fetchAll();
?>

<script>
    

</script>

<form id="fm">
<!---購物車---->
<br/><br/><br/>
<div class="Car_">
	<div class="TOPtitle">我的購買紀錄-明細</div>
	
	<!---商品列表-->
	<table class="cart-item">
		<thead>
			
		</thead>
		<tbody>
			<tr>
				<td colspan="4">
		          	<table>
						<tr>
						  <td>商品圖</td>
						  <td>商品名稱</td>
						  <td>數量</td>
						  <td></td>
						</tr>

						<?php 
							foreach($data as $index => $row){    								   
						?>

						<tr>
						  <td><img src="../Upload/<?=$row["PictureName"] ?>" width="100" height="100"></td>
						  <td><?=$row["ProductName"] ?></td>
						  <td><?=$row["QTY"] ?></td>
						  <td></td>
						</tr>

						<?php
							}
						?>

					</table>
				</td>				
			</tr>

		</tbody>
	</table>
	

</div>
</form>
<?php
	include("Footer.php");
?>