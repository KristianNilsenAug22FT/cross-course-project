const jacketsContainer = document.getElementById('jackets');
const featuredContainer = document.createElement('div');
featuredContainer.className = 'featured-container';

const endpoint = 'https://norwegiantechie.icu/wp-json/wc/store/products';
const featuredEndpoint = `${endpoint}?featured=true`;

fetch(featuredEndpoint)
  .then(response => response.json())
  .then(products => {
    const featuredJackets = products.filter(product => product.name.includes('Rainy Days Jacket'));

    featuredJackets.forEach(jacket => {
      const jacketLink = document.createElement('a');
      jacketLink.href = `jacket.html?id=${jacket.id}`;

      const jacketDiv = document.createElement('div');
      jacketDiv.className = 'jacket';

      const jacketImg = document.createElement('img');
      jacketImg.src = jacket.images[0].src;
      jacketImg.alt = jacket.name;

      const jacketName = document.createElement('h3');
      jacketName.textContent = jacket.name;

      const jacketPrice = document.createElement('p');
      jacketPrice.textContent = `$${jacket.prices.price}`;

      const featuredPr = document.createElement('h2');
      featuredPr.textContent = `Featured`;

      jacketDiv.appendChild(featuredPr);
      jacketDiv.appendChild(jacketImg);
      jacketDiv.appendChild(jacketName);
      jacketDiv.appendChild(jacketPrice);

      jacketLink.appendChild(jacketDiv);
      featuredContainer.appendChild(jacketLink);
    });

    jacketsContainer.insertAdjacentElement('beforebegin', featuredContainer);
  })
  .catch(error => {
    console.error('Error:', error);
  });

fetch(endpoint)
  .then(response => response.json())
  .then(products => {
    const jackets = products.filter(product => product.name.includes('Rainy Days Jacket'));

    jackets.sort((a, b) => (a.name > b.name) ? 1 : -1);
    jackets.forEach(jacket => {
      const jacketLink = document.createElement('a');
      jacketLink.href = `jacket.html?id=${jacket.id}`;

      const jacketDiv = document.createElement('div');
      jacketDiv.className = 'jacket';

      const jacketImg = document.createElement('img');
      jacketImg.src = jacket.images[0].src;
      jacketImg.alt = jacket.name;

      const jacketName = document.createElement('h2');
      jacketName.textContent = jacket.name;

      const jacketPrice = document.createElement('p');
      jacketPrice.textContent = `$${jacket.prices.price}`;

      jacketDiv.appendChild(jacketImg);
      jacketDiv.appendChild(jacketName);
      jacketDiv.appendChild(jacketPrice);

      jacketLink.appendChild(jacketDiv);
      jacketsContainer.appendChild(jacketLink);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
