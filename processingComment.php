<?php
    include_once 'connectToDB.php';
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    
    $query = "INSERT INTO `comments` (`name`, `email`, `message`) VALUES (:name, :email, :message)";
    $params = [
        ':name' => $name,
        ':email' => $email,
        ':message' => $message
    ];
    $stmt = $dbh->prepare($query);
    $stmt->execute($params);
?>