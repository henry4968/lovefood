<?php    
    include("Header.php");
    
    //登入檢查
    if($Member->getMemberID() == ""){
        echo "<script>alert('請先登入'); location.href = 'Login.php';</script>";
        exit();
    }
    
    //取得購物車商品--------------------------------------------
    
    //建立SQL
    $sql = "SELECT ec_car.ID as CarID, ec_products.ID as PID, ec_car.MID, ec_car.QTY, ec_products.ProductName, ec_products.Price, ec_products.PictureName FROM ec_car INNER JOIN ec_products ON ec_car.PID = ec_products.ID where ec_products.Status = 2 and ec_car.Status = 1 and ec_car.MID = ? order by ec_car.ID desc";
    
    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , $Member->getMemberID()); 
    $statement->execute();
    $data = $statement->fetchAll();
?>

<script>

    function RemoveCar(cid) {

        $.ajax({            
            method: "POST",
            url: "RemoveCar.php",
            data:{ 
                CID: cid
            },            
            dataType: "text",
            success: function (response) {
                if(response == ""){
                    //尚未登入->前往Login.php
                    alert('請先登入，將前往登入頁'); 
                    location.href = 'Login.php';
                }else{
                    //移除商品成功
                    alert(response);
                    location.reload();
                }                 
            },
            error: function(exception) {
                alert("移除商品失敗: " + exception.status);
            }
        });
        
    }

    function doSubmit() {
        if(confirm("確定購買?")) {
            //return true;
            BuyCar();
        }else{
            return false;
        } 
    }

    function BuyCar() {

        $.ajax({            
            method: "POST",
            url: "BuyCar.php",
            data:{},            
            dataType: "text",
            success: function (response) {
                if(response == ""){
                    //尚未登入->前往Login.php
                    alert('請先登入，將前往登入頁'); 
                    location.href = 'Login.php';
                }else{
                    //購買完成
                    alert(response);
                    location.href = "Order.php";
                }                 
            },
            error: function(exception) {
                alert("購買失敗: " + exception.status);
            }
        });

    }

</script>

<form id="fm">
<!---購物車---->
<br/><br/><br/>
<div class="Car_">
	<div class="TOPtitle">購物車</div>
	
	<!---商品列表-->
	<table class="cart-item">
		<thead>
			<tr>
             <th>商品資訊</th>
             <th>售價</th>
             <th>數量</th>
			<!--<th>可買量</th>-->
             <th>小計</th>
            </tr>
		</thead>
		<tbody>

        <?php
            $total = 0;    
            foreach($data as $index => $row){    
                $price = $row["Price"];
                $QTY = $row["QTY"];
                $amount = $price * $QTY;
                $total += $amount;            
        ?>

			<tr>
				<td class="product-item">
		          <div class="info">
		                <a href="#" class="remove" onclick="RemoveCar('<?=$row["CarID"] ?>');">✕</a>
                      <img src="../Upload/<?=$row["PictureName"] ?>" width="100" height="100">
			      <div class="details">
				   <span class="name"><?=$row["ProductName"] ?></span><br>
				   <!--<span class="size">白色 M</span><br>-->
				  </div>
				   </div>
				</td>
				<td><span class="mobi_pr" ><?=$price ?></span></td>
				<!--
                    <td class="quantity">
				  <select><option selected="selected" disabled="disabled" value="">1</option><option>1</option></select>
				</td>
                    -->
				<td><span class="mobi_sa"><?=$QTY ?></span></td>
				<td class="last"><span class="mobi_fa"><?=$amount ?></span></td>
			</tr>

        <?php } ?>

			<tr>
				<td class="product-item">
		          <div class="info">
		          
			      <div class="details">
				   
				  </div>
				   </div>
				</td>
				<td></td>
				<!--
                    <td class="quantity">
				  <select><option selected="selected" disabled="disabled" value="">1</option><option>1</option></select>
				</td>
                    -->
				<td></td>
				<td class="last"><span class="mobi_fa">總金額: <font color='brown'><?=$total ?></font></span></td>
			</tr>

		</tbody>
	</table>
	
<!----結帳---->	
    <br />    
    <?php
        if($total > 0){
    ?>
        <input type="button" class="sami _S_" value="確定購買" onclick="return doSubmit();">	
        <?php } ?>
</div>
</form>
<?php
	include("Footer.php");
?>