var addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
    button.addEventListener('submit', function(event) {
        // Use event.target to get the form that the button is inside of
        var form = event.target;

        // Use the form to query for the elements inside it
        var quantity = form.querySelector('.qty').value;
        var productName = form.querySelector('input[name="product-name"]').value;
        var productPrice = form.querySelector('input[name="product-price"]').value;

        console.log('Quantity:', quantity);
        console.log('Product Name:', productName);
        console.log('Product Price:', productPrice);
        const product = {quantity , productName , productPrice};
        let productColl = JSON.parse(localStorage.getItem('product'));

            if (!productColl) {
                productColl = [];
            }

            productColl.push(product);

            localStorage.setItem('product', JSON.stringify(productColl));
        // Now you can use these values in your backend logic
        // For example, you might send them to your server using an AJAX request
    });
});