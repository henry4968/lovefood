<?php
    include("Header.php");
    
    //取得商品--------------------------------------------
    $CateID = isset($_GET["CID"]) ? $_GET["CID"] : "";

    //建立SQL
    $sql = "SELECT * FROM ec_products WHERE Status = 2";
    if($CateID != ""){
        $sql .= " and CateID = ?";
    }
    $sql .= " ORDER BY ID DESC";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //若CateID有值才加入SQL WHERE條件式裡
    if($CateID != ""){
        $statement->bindValue(1, $CateID);
    }

    //給值
    $statement->execute();
    $products = $statement->fetchAll();
?>
<script>
    function addToCar(pid) {        
        var qty = document.getElementById('qty_' + pid).value;

        if (qty=='0') {
            alert("請選擇數量!");
            return false;
        }

        $.ajax({            
            method: "POST",
            url: "AddToCar.php",
            data:{ 
                PID: pid,
                QTY: qty
            },            
            dataType: "text",
            success: function (response) {
                if(response == ""){
                    //尚未登入->前往Login.php
                    alert('請先登入，將前往登入頁'); 
                    location.href = 'Login.php';
                }else{
                    //加入購物車成功
                    alert(response);
                }                
            },
            error: function(exception) {
                alert("加入購物車失敗: " + exception.status);
            }
        });
    }
</script>

<form id="fm">
<!-----商品列圖----->

<div class="WishList">
   
    <?php
        foreach($products as $index => $row){
    ?>

		<div class="product-list">
            <img src='../Upload/<?=$row["PictureName"] ?>' width="200" height="200"/>
		    <div class="name"><?=$row["ProductName"] ?></div>
            <div class="price">售價: <?=$row["Price"] ?></div>
			<div class="all_">
				<select id="qty_<?=$row["ID"] ?>" name="qty_<?=$row["ID"] ?>">
                    <?php for ($i = 0; $i <= 10; $i++) { ?>
                        <option value="<?=$i ?>"><?=$i ?></option>
                    <?php } ?>
				</select>
				<input type="button" value="加入購物車" class="sami btnMoveToCart" onclick='addToCar(<?=$row["ID"] ?>);'>
			</div>
    	</div>
	
    <?php } ?>
	
	<!---頁碼----->	    
    <!--
	<div class="page_n">
		<ul>
		  <li><a href="#">&lt;</a></li>
		    <li><a href="#" style="text-decoration: underline;">1</a></li>	
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
		  <li><a href="#">&gt;</a></li>	
		</ul>
	</div>
    -->
		
</div>
</form>
<?php
	include("Footer.php");
?>