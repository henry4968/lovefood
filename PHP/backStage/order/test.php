<!-- <?php
    // include('../phpqrcode/qrlib.php');
    // include('config.php');

    
    // if(isset($_GET) && !empty($_GET)) { 
         
        // $param = $_GET['orderNum']; // remember to sanitize that - it is user input!
    
        // we need to be sure ours script does not output anything!!!
        // otherwise it will break up PNG binary!
        
        // ob_start("callback");
        // $codeText = 'DEMO - '.$param;
        // QRcode::png('123','../phpqrcode/text.png');
        
        // here DB request or some processing
        
        // end of processing here
        // base64_encode(ob_get_contents());
        // ob_end_clean();
        // echo `<img scr="../phpqrcode/text.png">`;
        // echo 123;
        // outputs image directly into browser, as PNG stream
        // QRcode::png($codeText);
    // } 

?> -->
<?php 
    if(isset($_GET) && !empty($_GET)) {
        // include('library/phpqrcode/qrlib.php'); 
        include('../phpqrcode/qrlib.php');

        $image_location = "phpqrcode/";
        $image_name = 'test.png';
        $dataContent = 'http://10.2.0.96/GIT/PHP/backStage/order/ship.php?orderNum='.$_GET['orderNum'];
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