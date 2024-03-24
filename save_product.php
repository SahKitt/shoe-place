<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shoespot";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Example product data
$productData = array(
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"5", "assets/NIKE Air Force 1 x A MaManiere 3M Hand Wash Cold.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"6", "assets/NIKE Air Force 1 x A MaManiere 3M Hand Wash Cold.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"7", "assets/NIKE Air Force 1 x A MaManiere 3M Hand Wash Cold.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY” ", 6500.00,"5", "assets/Nike Air Vapormax Plus.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"6", "assets/Nike Air Vapormax Plus.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"7", "assets/Nike Air Vapormax Plus.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"5", "assets/Nike Terminator.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"6", "assets/Nike Terminator.jpeg"),
    array("Nike","Air Force 1 Low Retro QS “FRIDAY”", 6500.00,"7", "assets/Nike Terminator.jpeg"),
    array("Adidas","Adidas originals Centennial 85", 6500.00, "5","assets/Nike Air Force 1 Low “Christmas” CQ5059 118.jpeg"),
    array("Adidas","Adidas originals Centennial 85", 6500.00, "6","assets/Nike Air Force 1 Low “Christmas” CQ5059 118.jpeg"),
    array("Adidas","Adidas originals Centennial 85", 6500.00, "7","assets/Nike Air Force 1 Low “Christmas” CQ5059 118.jpeg"),
);

// Insert products into database
foreach ($productData as $product) {
    $brand = $product[0];
    $name = $product[1];
    $price = $product[2];
    $size = $product[3];
    $image_url = $product[4];

    // Insert product into database
    $sql = "INSERT INTO products2 (Brand,Name,Price,Size, ImageURL)
            VALUES ('$brand','$name','$price','$size','$image_url')";

    if ($conn->query($sql) === TRUE) {
        echo "Product added successfully: $name<br>";
    } else {
        echo "Error adding product: $name - " . $conn->error . "<br>";
    }
}

// Close connection
$conn->close();
?>
