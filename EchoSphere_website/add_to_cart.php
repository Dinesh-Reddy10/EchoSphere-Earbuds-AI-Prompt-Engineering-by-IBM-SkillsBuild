<?php
session_start();

// Simple cart handling logic
if(isset($_POST['add_to_cart'])) {
    $product = $_POST['product_name'];
    $price = $_POST['price'];

    if(isset($_SESSION['cart'])) {
        $_SESSION['cart'][] = array('product' => $product, 'price' => $price);
    } else {
        $_SESSION['cart'] = array(array('product' => $product, 'price' => $price));
    }

    echo "<script>alert('Product added to cart'); window.location.href='index.html';</script>";
}
?>
