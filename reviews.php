<?php
// Retrieve review data from the customer reviews
$reviewText = $_POST['ReviewText'];

// Establish database connection
$connection = mysqli_connect('localhost', 'root', '', 'shoespot');

// Check if the connection was successful
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Construct the SQL query to insert reviews to database table
$insertQuery = "INSERT INTO reviews (Review) VALUES ('$reviewText')";

// Execute the insert query
$insertResult = mysqli_query($connection, $insertQuery);
//check if insert query is successful
if ($insertResult) {
    echo "Review added successfully!";
} else {
    echo "Error: Unable to add review";
}

/*
//deleting review

// Construct the SQL query to delete the user data
$deleteQuery = "DELETE FROM reviews WHERE Review = '$reviewText'";

// Execute the delete query
$deleteResult = mysqli_query($connection, $deleteQuery);

// Check if the delete query was successful
if ($deleteResult) {
    echo "data deleted from the database!";
} else {
    echo "Error: Unable to delete user data.";
}
*/
// Close the database connection
mysqli_close($connection);
?>
