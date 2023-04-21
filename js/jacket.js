const productId = new URLSearchParams(window.location.search).get('id');
const endpoint = `https://norwegiantechie.icu/wp-json/wc/store/products/${productId}`;
const jacketContainer = document.getElementById('jacket');

fetch(endpoint)
  .then(response => response.json())
  .then(product => {
    const jacketImg = document.createElement('img');
    jacketImg.src = product.images[0].src;
    jacketImg.alt = product.name;

    const jacketName = document.createElement('h2');
    jacketName.textContent = product.name;

    const jacketPrice = document.createElement('p');
    jacketPrice.textContent = `$${product.prices.price}`;

    const jacketDescription = document.createElement('p');
    jacketDescription.innerHTML = product.description.replace(/<h2>/g, '').replace(/<\/h2>/g, '');

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
      const cartEndpoint = 'https://norwegiantechie.icu/wp-json/wc/store/cart/items';
      const cartData = {
        product_id: productId,
        quantity: 1
      };
      fetch(cartEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Product added to cart:', data);
        alert('Product added to cart!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });

    jacketContainer.appendChild(jacketImg);
    jacketContainer.appendChild(jacketName);
    jacketContainer.appendChild(jacketPrice);
    jacketContainer.appendChild(jacketDescription);
    jacketContainer.appendChild(addToCartButton);
  })
  .catch(error => {
    console.error('Error:', error);
  });
