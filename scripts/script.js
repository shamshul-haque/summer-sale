// get selected product price
function getPrice(priceId) {
  const price = document.getElementById(priceId);
  const priceString = price.innerText;
  const priceValue = parseFloat(priceString);
  return priceValue;
}

// store product-1 price
function product1() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p1-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-2 price
function product2() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p2-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-3 price
function product3() {
  setTitle("Home Cooker");
  const productPrice = getPrice("p3-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-4 price
function product4() {
  setTitle("Sports Back Cap");
  const productPrice = getPrice("p4-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-5 price
function product5() {
  setTitle("Full Jersey Set");
  const productPrice = getPrice("p5-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-6 price
function product6() {
  setTitle("Sports cates");
  const productPrice = getPrice("p6-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-7 price
function product7() {
  setTitle("Single Relax Chair");
  const productPrice = getPrice("p7-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-8 price
function product8() {
  setTitle("Children play");
  const productPrice = getPrice("p8-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

// store product-9 price
function product9() {
  setTitle("Flexible Sofas");
  const productPrice = getPrice("p9-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
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

// set new total price
function setPrice(elementId, value) {
  const totalPrice = document.getElementById(elementId);
  totalPrice.innerText = value.toFixed(2);
}

// check validation and update value
function checkValidation(price) {
  setPrice("total-price", price);
  setPrice("mega-total", price);

  const purchaseBtn = document.getElementById("purchase-btn");
  if (price > 0) {
    purchaseBtn.removeAttribute("disabled");
  }

  const applyBtn = document.getElementById("apply-btn");
  const couponField = document.getElementById("coupon-field");
  if (price >= 200) {
    applyBtn.removeAttribute("disabled");
    applyBtn.addEventListener("click", function () {
      if (couponField.value === "SELL200") {
        const discount = (20 / 100) * price;
        setPrice("discount", discount);
        const total = price - discount;
        setPrice("mega-total", total);
        couponField.value = "";
      } else {
        return alert("Your coupon code is invalid!");
      }
    });
  }

  document.getElementById("go-home").addEventListener("click", function () {
    price = 0;
    setPrice("total-price", price);
    setPrice("discount", price);
    setPrice("mega-total", price);
    purchaseBtn.setAttribute("disabled", true);
    applyBtn.setAttribute("disabled", true);
    title.innerHTML = "";
  });
}
