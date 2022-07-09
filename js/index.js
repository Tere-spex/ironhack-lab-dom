// ITERATION 1
function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  const total = quantity * price;
  const spanSubtotal = product.querySelector('.subtotal span').innerText = total;
  return total;
}

function calculateAll() {
  // ITERATION 2 CALCULAR EL SUBTOTAL DE TODOS LOS PRODUCTOS
  const singleProduct = document.querySelectorAll('.product');
  const products = Array.from(singleProduct);
  let total = 0;

  products.forEach(product => {
    const price = updateSubtotal(product);
    total += price;
  });
  
  // ITERATION 3 MOSTAR EL TOTAL GENERAL
  const totales = document.querySelector('#total-value span');
  totales.innerText = total;
  return products;
}

// BONUS - ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.parentElement.parentElement;
  product.remove();
}

// ITERATION 5
function createProduct() {
  const name = document.querySelector('#inputName').value;
  const price = document.querySelector('#inputPrice').value; 

  const productContainer = document.querySelector('tbody');
  const product = document.createElement('tr')
  product.innerHTML = `
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;
  productContainer.appendChild(product);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(removebtn => {
    removebtn.addEventListener('click', removeProduct);
  }
  );
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});


