<?php
// Retrieve the username and password entered by the user
$username = $_POST['uname'];
$password = $_POST['psw'];

// Establish a connection to the database
$connection = mysqli_connect('localhost', 'root', '', 'shoespot');

// Construct the SQL query to insert the user data
$insertQuery = "INSERT INTO login (Username, Password) VALUES ('$username', '$password')";

// Execute the insert query
$insertResult = mysqli_query($connection, $insertQuery);
//check if insert query is successful
if ($insertResult) {
    echo "User data saved in the database!";
} else {
    echo "Error: Unable to save user data.";
}
/*
// Construct the SQL query to delete the user data
$deleteQuery = "DELETE FROM login WHERE Username = '$username' AND Password = '$password'";

// Execute the delete query
$deleteResult = mysqli_query($connection, $deleteQuery);

// Check if the delete query was successful
if ($deleteResult) {
    echo "User data deleted from the database!";
} else {
    echo "Error: Unable to delete user data.";
}

// Closing the database connection
mysqli_close($connection);
*/
?>
