function product1() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p1-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product2() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p2-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product3() {
  setTitle("Home Cooker");
  const productPrice = getPrice("p3-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product4() {
  setTitle("Sports Back Cap");
  const productPrice = getPrice("p4-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product5() {
  setTitle("Full Jersey Set");
  const productPrice = getPrice("p5-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product6() {
  setTitle("Sports cates");
  const productPrice = getPrice("p6-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product7() {
  setTitle("Single Relax Chair");
  const productPrice = getPrice("p7-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product8() {
  setTitle("Children play");
  const productPrice = getPrice("p8-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

function product9() {
  setTitle("Flexible Sofas");
  const productPrice = getPrice("p9-price");
  const prevTotal = getPrice("total-price");

  const newTotal = productPrice + prevTotal;
  setPrice("total-price", newTotal);

  const discount = (20 / 100) * newTotal;
  setPrice("discount", discount);

  const total = newTotal - discount;
  setPrice("mega-total", total);
}

// getting selected product price
function getPrice(priceId) {
  const price = document.getElementById(priceId);
  const priceString = price.innerText;
  const priceValue = parseFloat(priceString);
  return priceValue;
}

// showing selected product list
function setTitle(titleId) {
  const title = document.getElementById("title");
  let count = title.childElementCount;
  const li = document.createElement("li");
  title.appendChild(li);
  li.classList.add("text-lg", "font-medium");
  li.innerHTML = `${(count += 1)}. ${titleId}`;
}

// set new total price after selected new item
function setPrice(elementId, value) {
  const totalPrice = document.getElementById(elementId);
  totalPrice.innerText = value.toFixed(2);
}
