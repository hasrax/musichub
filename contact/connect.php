
<?php

include 'inter.php';
if($_SERVER['REQUEST_METHOD']=='POST')
{
    $email=$_POST['email'];
    $Name=$_POST['Name'];
}


    
    //check connection
    if(!empty($email) && !empty($Name))
    {
        $sql="INSERT INTO Contact(email,Name) VALUES('$email','$Name')";
        mysqli_query($conn,$sql);

        echo "<script type='text/javascript'> alert ('data added')</script>";
    }

    else
    {
        echo "<script type='text/javascript'> alert ('Check Again!')</script>";

    }

?>
