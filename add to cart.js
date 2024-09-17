
let cartItems = [];

function showCart() {
    document.getElementById("cartSection").style.display = "block";
}

function addToCart(product, price, image) {
    const existingItem = cartItems.find(item => item.product === product);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ product, price, image, quantity: 1 });
    }
    updateCartDisplay();
    showCart();
}

function updateCartDisplay() {
    const cartTableBody = document.getElementById("cartTable").getElementsByTagName("tbody")[0];
    cartTableBody.innerHTML = ''; 

    cartItems.forEach(item => {
        const row = cartTableBody.insertRow();

        const imgCell = row.insertCell(0);
        const img = document.createElement("img");
        img.src = item.image;
        img.width = 50;
        imgCell.appendChild(img);

        const productCell = row.insertCell(1);
        productCell.textContent = item.product;

        const priceCell = row.insertCell(2);
        priceCell.textContent = `₱${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        const quantityCell = row.insertCell(3);
        quantityCell.textContent = item.quantity;

        const totalCell = row.insertCell(4);
        totalCell.textContent = `₱${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });
}

function placeOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const orderTableBody = document.getElementById("orderSummaryTable").getElementsByTagName("tbody")[0];
    orderTableBody.innerHTML = ''; 

    let totalPrice = 0; 

    cartItems.forEach(item => {
        const row = orderTableBody.insertRow();

        const imgCell = row.insertCell(0);
        const img = document.createElement("img");
        img.src = item.image;
        img.width = 50;
        imgCell.appendChild(img);

        const productCell = row.insertCell(1);
        productCell.textContent = item.product;

        const priceCell = row.insertCell(2);
        priceCell.textContent = `₱${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        const quantityCell = row.insertCell(3);
        quantityCell.textContent = item.quantity;

        const totalCell = row.insertCell(4);
        const itemTotal = item.price * item.quantity;
        totalCell.textContent = `₱${itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        totalPrice += itemTotal;
    });

    const totalRow = orderTableBody.insertRow();

    const totalTextCell = totalRow.insertCell(0); 
    totalTextCell.textContent = 'Total Price:';
    totalTextCell.colSpan = 4; 
    totalTextCell.style.textAlign = 'left'; 
    totalTextCell.style.fontWeight = 'bold'; 

    const totalPriceCell = totalRow.insertCell(1); 
    totalPriceCell.textContent = `₱${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`; 
    totalPriceCell.style.textAlign = 'right'; 
    totalPriceCell.style.fontWeight = 'bold'; 

    document.getElementById("orderSummary").style.display = "block"; 

    cartItems = []; 
    updateCartDisplay();
    document.getElementById("cartSection").style.display = "none";
}

function confirmOrder() {
    alert("Order confirmed! Thank you for your purchase.");
    document.getElementById("orderSummary").style.display = "none";
}

function cancelOrder() {
    document.getElementById("orderSummary").style.display = "none";
}

function cancelCart() {
    document.getElementById("cartSection").style.display = "none";
}

