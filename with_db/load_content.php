<?php
// Connection detail
$servername="localhost";
$username="test";
$password="test1234";
$dbname="memo_web_app";
$tablename="memo_table";

// Create connection
$conn=new mysqli($servername,$username,$password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}

// Execute query
$sql="SELECT content, created_at FROM memo_table";
$result = $conn->query($sql);

if ($result) {
    // Query succeeded
    // Check contents exists
    if ($result->num_rows > 0) {
        // Fetch all rows
        while ($row = $result->fetch_assoc()) {
            $contentArray[] = $row['content'] . ' (저장시간: ' . $row['created_at'] . ')';
        }
        
        // Format
        $content = implode(',', $contentArray);

        // Return
        echo $content;
    }
    else {
        echo "가져올 메모가 없습니다.";
    }
} else {
    // Query failed
    echo "쿼리 실패: " . $sql . "<br>" . $conn->error;
}

// Method 가 GET 이고 데이터가 존재하면 가져오기

// Close connection
$conn->close();
?>

