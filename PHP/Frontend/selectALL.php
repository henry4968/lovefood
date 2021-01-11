<?php

// 資料庫連線
include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 找出ID
include("Lib/MemberClass.php");
$Member = new MemberClass();
$Member = $Member->getMemberID();

//======================================================== 
//建立SQL 訂單
$sqlod = "SELECT * FROM `order` where MEMBER_ID_for_OD = ?";

// 執行
$order = $Util->getPDO()->prepare($sqlod);

// 給值
$order->bindValue(1, $Member);
$order->execute();
$dataorder = $order->fetchAll();

//======================================================== 
//建立SQL 訂單細節
$sqloddel = "SELECT *
        FROM `order` as aa
        join order_detail as bb
        on
        aa.ORDER_ID = bb.ORDER_ID_for_ODD
        join mrt_pickup_site as cc
        on
        aa.MRT_PICKUP_SITE_ID_for_OD = cc.MRT_PICKUP_SITE_ID
        join product as dd
        on
        bb.PRODUCT_ID_for_ODD = dd.PRODUCT_ID
        join supplier as ee
        on
        dd.SUPPLIER_ID_for_PD = ee.SUPPLIER_ID
        where aa.MEMBER_ID_for_OD = ?";

// 執行
$orderdel = $Util->getPDO()->prepare($sqloddel);

// 給值
$orderdel->bindValue(1, $Member);
$orderdel->execute();
$dataorderdel = $orderdel->fetchAll();


// 讀取圖片
foreach ($dataorderdel as $index => $row) {
  // $row['PRODUCT_IMG'] = base64_decode($row['PRODUCT_IMG']);
  // echo $row['PRODUCT_IMG'];
  // echo '<br>';
}

// 做陣列
$allData = array('order' => $dataorder, 'detail' => $dataorderdel);

for ($i = 0; $i < count($dataorder); $i++) {

  for ($k = 0; $k < count($dataorderdel); $k++) {
    // 假如訂單細項的訂單編號等於訂單裡的訂單編號就將訂單細項塞入該訂單裡
    if ($dataorder[$i]['ORDER_ID'] === $dataorderdel[$k]['ORDER_ID_for_ODD']) {
      $dataorder[$i]['detail'][] = $dataorderdel[$k];
    }
  }
}

// 對變量進行JSON編碼，不能只用print_r是因為它是把裡面的內容轉字串
print_r(json_encode($dataorder));
