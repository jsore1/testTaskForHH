<?php
    try {
        $dbh = new PDO('mysql:host=localhost;dbname=test_db', 'root', 'root');
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage();
        die();
    }
?>