<?php
    include_once 'connectToDB.php';
    $dataArray = array();
    $stmt = $dbh->prepare('SELECT * FROM comments');
    $stmt->execute();
    while ($row = $stmt->fetch(PDO::FETCH_LAZY)) {
        $dataArray[] = array('name' => $row->name, 'email' => $row->email, 'message' => $row->message);
    }
    echo json_encode($dataArray);
?>