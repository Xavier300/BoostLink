
document.getElementById("order-form").addEventListener("submit", function (event) { event.preventDefault(); // Prevent the form from submitting
    // Get the selected product and quantity
    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    
    // Define product prices 
    const productPrices = {
        CPE710: 3240,
        CPE510: 2290,
        "TL-ANT2424MD": 10862,
        "TL-ANT2415MS": 9400,
        WBS210: 7529,
        "TL-R480T+": 3462,
    };
    // Calculate the total price
    const totalPrice = productPrices[product] * quantity;
    
    // Display the order summary
    const orderSummary = `You have ordered ${quantity} items of ${product} products for a total of ₱${totalPrice.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("order-summary").innerHTML = `<p>${orderSummary}</p>`;
});