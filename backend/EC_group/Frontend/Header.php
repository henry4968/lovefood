<?php
	include("../Lib/UtilClass.php");
	$Util = new UtilClass();
	include("../Lib/MemberClass.php");
	$Member = new MemberClass();

	//建立SQL
    $sql = "SELECT * FROM ec_category WHERE Status = 2 ORDER BY ID DESC";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->execute();
	$cate_data = $statement->fetchAll();
	
	//顯示會員資訊
	$showMemberText = $Member->getMemberName() == "" ? "<a href='Login.php'>會員登入</a>" : "Hello~".$Member->getMemberName()."&nbsp;&nbsp;&nbsp;<a href='Logout.php'>登出</a>";
?>
<!doctype html>
<html lang="zh">
<head>
    <title>EC商城</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../Resource/css/styles.css">
    <link rel="stylesheet" type="text/css" href="../Resource/css/PROList.css"  />
	<link rel="stylesheet" type="text/css" href="../Resource/css/Car.css"  />
    <link rel="stylesheet" href="../Resource/css/flickity-docs.css" media="screen" />
</head>
    
<body>
    <div class="wrapper">
		
	        <nav>
	            <div id="drop">
					<div style="margin-top: .6rem;">
					<div >
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                </div>
						</div>
					 <div class="top_LOGO"><a href="Product.php"><img src="../Resource/images/logo.svg" alt=" "></a></div> 
					 </nav>
	                 <ul>
				<li> </li>                
				<li><a href="Product.php">所有商品</a></li>
				
                <?php
                	foreach($cate_data as $index => $row){
                ?>
                <li><a href="Product.php?CID=<?=$row["ID"] ?>"><?=$row["Name"] ?></a></li>
				<?php } ?>

                <li><a href="Order.php">我的消費紀錄</a></li>
				<li class="point___mobi"><b><?=$showMemberText ?></b></li>
	        </ul>  
	            </div>
			       
	               <div class="_bag">
	                   <ul>
	                   <li><a href="Car.php"><img src="../Resource/images/bag.png"></a></li>
	                  <li class="point___"><b><?=$showMemberText ?></b></li>
	                  </ul>
                  	</div>
		
	    </div>

    <script src="../Resource/js/jquery-1.11.0.min.js" type="text/javascript"></script>
	<script src="../Resource/js/app.js"></script> 
	