<?php
// Connection detail
$servername="34.64.140.24";
$username="root";
$password="test1234";
$dbname='memo_web_app';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// If content is submitted
if ($_SERVER["REQUEST_METHOD"] == 'POST' && isset($_POST['content'])) {
    $content=$_POST['content'];

    // Store it into the database
    $sql="INSERT INTO memo_table (content) VALUES ('$content')";
    if ($conn->query($sql)===TRUE) {
        echo "저장되었습니다.";
    }
    else {
        echo "저장 실패: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>

