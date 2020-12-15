<?php

include("./Lib/connection.php");

error_reporting(E_ALL & ~ (E_STRICT | E_NOTICE | E_WARNING));
// 獲取檔案資源
$file  = $_FILES['excel_path'];
$file_name = $file['tmp_name'];
if($file_name == '')
{
die("請選擇要上傳的csv檔案");
}
// 以只讀的方式開啟檔案
$handle = fopen($file_name, 'r');
if($handle === FALSE) die("開啟檔案資源失敗");
// setlocale() 函式設定地區資訊（地域資訊）。
@setlocale(LC_ALL, 'zh_CN');
// CSV對應的欄位名
$csv_val = array('express_type','product_type','add_time','invoice_no','area','weight','money','added_cost','shop_name','invoice_no2','area2','weight2','money2','added_cost2');
$csv_arr = array();
while(($data = fgetcsv($handle)) !== FALSE)
{
// TODO::這裡需要檢查和給的欄位數是否一致，如果不一致，則不能寫入
$tmp_row = array();
foreach ($csv_val as $k => $v)
{
$tmp_row[$v] = trim(iconv('gbk','utf-8', ltrim($data[$k], '`')));
}
$csv_arr[] = $tmp_row;
}
// 關閉資源
fclose($handle);
print_r($csv_arr);
// TODO::判斷資料是否讀取到，然後入庫


?>
