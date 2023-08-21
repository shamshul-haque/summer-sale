// get selected product price
function getPrice(priceId) {
  const price = document.getElementById(priceId);
  const priceString = price.innerText;
  const priceValue = parseFloat(priceString);
  return priceValue;
}

// show selected product list
function setTitle(titleId) {
  const title = document.getElementById("title");
  let count = title.childElementCount;
  const li = document.createElement("li");
  title.appendChild(li);
  li.classList.add("text-lg", "font-medium");
  li.innerHTML = `${(count += 1)}. ${titleId}`;
}

// update data with validation
function updateData(data) {
  setPrice("total-price", data);
  setPrice("mega-total", data);

  const purchaseBtn = document.getElementById("purchase-btn");
  if (data > 0) {
    purchaseBtn.removeAttribute("disabled");
  }

  const applyBtn = document.getElementById("apply-btn");
  if (data >= 200) {
    applyBtn.removeAttribute("disabled");
  }
}
const couponField = document.getElementById("coupon-field");
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {
  if (couponField.value === "SELL200") {
    const totalPrice = getPrice("total-price");
    const discount = (20 / 100) * totalPrice;
    setPrice("discount", discount);
    const total = totalPrice - discount;
    setPrice("mega-total", total);
    couponField.value = "";
  } else {
    alert("Please provide valid coupon code!");
    couponField.value = "";
    return;
  }
});

// set new total price
function setPrice(elementId, value) {
  const totalPrice = document.getElementById(elementId);
  totalPrice.innerText = value.toFixed(2);
}

// store product-1 price
function product1() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p1-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-2 price
function product2() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p2-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-3 price
function product3() {
  setTitle("Home Cooker");
  const productPrice = getPrice("p3-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-4 price
function product4() {
  setTitle("Sports Back Cap");
  const productPrice = getPrice("p4-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-5 price
function product5() {
  setTitle("Full Jersey Set");
  const productPrice = getPrice("p5-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-6 price
function product6() {
  setTitle("Sports cates");
  const productPrice = getPrice("p6-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-7 price
function product7() {
  setTitle("Single Relax Chair");
  const productPrice = getPrice("p7-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-8 price
function product8() {
  setTitle("Children play");
  const productPrice = getPrice("p8-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// store product-9 price
function product9() {
  setTitle("Flexible Sofas");
  const productPrice = getPrice("p9-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  updateData(newTotal);
}

// reset all
document.getElementById("go-home").addEventListener("click", function () {
  location.reload();
});
