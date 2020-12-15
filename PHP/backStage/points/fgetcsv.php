<?php

    $row = 1;
    if (($handle = fopen("input.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $num = count($data);
            for ($i=0; $i < $num; $i++) {
                echo $data[$i] . "<br />\n";
        }
    }
    fclose($handle);
}
?>