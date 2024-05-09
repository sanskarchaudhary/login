document.querySelector('.add-to-cart').addEventListener('submit', function(event) {
    var quantity = document.querySelector('#qty-2').value;
    var productName = document.querySelector('input[name="product-name"]').value;
    var productPrice = document.querySelector('input[name="product-price"]').value;

    console.log('Quantity:', quantity);
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    localStorage.setItem('product',JSON.stringify({quantity , productName , productPrice }))
    // Now you can use these values in your backend logic
    // For example, you might send them to your server using an AJAX request
});