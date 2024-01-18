function addToBasket(product, price) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let item = { product: product, price: price };
    basket.push(item);
    localStorage.setItem('basket', JSON.stringify(basket));
}

function removeItem(product) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let index = basket.findIndex(item => item.product === product);
    if (index !== -1) {
        basket.splice(index, 1);
        localStorage.setItem('basket', JSON.stringify(basket));
        updateBasketView();
    }
}

function updateBasketView() {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let basketDiv = document.getElementById('basket');
    basketDiv.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        let itemDiv = document.createElement('tr');
        let productName = basket[i].product;
        let productPrice = basket[i].price;
        itemDiv.innerHTML = `<td class="product-name">${productName}</td> <td class="product-price">Цена: ${productPrice} $.</td> <td><button class="remove-btn" onclick="removeItem('${productName}')"> - REMOVE</button></td>`;
        basketDiv.appendChild(itemDiv);
    }
}

updateBasketView();