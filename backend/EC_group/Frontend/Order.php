<?php    
    include("Header.php");
    
    //登入檢查
    if($Member->getMemberID() == ""){
        echo "<script>alert('請先登入'); location.href = 'Login.php';</script>";
        exit();
    }
    
    //取得訂單列表--------------------------------------------
    
    //建立SQL
    $sql = "SELECT * FROM ec_orders WHERE MID = ? ORDER BY ID DESC";
    
    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , $Member->getMemberID()); 
    $statement->execute();
    $data = $statement->fetchAll();
?>

<script>
    

</script>

<form id="fm">
<!---購物車---->
<br/><br/><br/>
<div class="Car_">
	<div class="TOPtitle">我的購買紀錄</div>
	
	<!---商品列表-->
	<table class="cart-item">
		<thead>
			
		</thead>
		<tbody>
			<tr>
				<td colspan="4">
		        	<table>
						<tr>
						    <td>訂單編號</td>
						    <td>金額</td>
						    <td>日期</td>
						    <td></td>
						</tr>

						<?php 
							foreach($data as $index => $row){    								   
						?>

						<tr>
						    <td><a href="OrderDetail.php?OID=<?=$row["ID"] ?>"><?=$row["OrderNumber"] ?></td>
						    <td><?=$row["Amount"] ?></td>
						    <td><?=$row["CreateDate"] ?></td>
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