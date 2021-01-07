<?php 
    if(isset($_GET) && !empty($_GET)) {
        // include('library/phpqrcode/qrlib.php'); 
        include('../phpqrcode/qrlib.php');

        $image_location = "phpqrcode/";
        $image_name = 'test.png';
        // $dataContent = 'http://10.2.1.13:80/GIT/PHP/backStage/order/ship.php?orderNum='.$_GET['orderNum'];
        $dataContent = 'http://10.2.1.13/Lovefood/PHP/backStage/order/ship.php?orderNum='.$_GET['qrcode'];

        $ecc = 3;
        $size = 3;
        // generating the QR code
        QRcode::png($dataContent, $image_location.$image_name); 
        
        // displaying the QR code on the web page
        echo '../PHP/backStage/order/'.$image_location.$image_name;
    
    } else {
        header('location:./');
    }
?>