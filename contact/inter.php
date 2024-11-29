<?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "mwd";
        // Create connection
        $conn = mysqli_connect("$servername", "$username", "$password","$dbname");
        
        if($conn)
    {
        echo "connected";
    }
    else
    {
        die("Connection failed");
 
    }
?>