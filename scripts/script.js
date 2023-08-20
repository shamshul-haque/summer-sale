function checkValidation(price) {
  setPrice("total-price", price);
  setPrice("mega-total", price);

  if (price > 0) {
    document.getElementById("purchase-btn").removeAttribute("disabled");
  }

  if (price >= 200) {
    const couponField = document.getElementById("coupon-field");
    couponField.removeAttribute("disabled");
    couponField.addEventListener("keyup", function (e) {
      const couponCode = e.target.value;
      const applyBtn = document.getElementById("apply-btn");
      if (couponCode === "SELL200") {
        applyBtn.removeAttribute("disabled");
        applyBtn.addEventListener("click", function () {
          const discount = (20 / 100) * price;
          setPrice("discount", discount);
          const total = price - discount;
          setPrice("mega-total", total);
        });
      } else {
        applyBtn.setAttribute("disabled", true);
      }
    });
  }
}

function product1() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p1-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product2() {
  setTitle("K. Accessories");
  const productPrice = getPrice("p2-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product3() {
  setTitle("Home Cooker");
  const productPrice = getPrice("p3-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product4() {
  setTitle("Sports Back Cap");
  const productPrice = getPrice("p4-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product5() {
  setTitle("Full Jersey Set");
  const productPrice = getPrice("p5-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product6() {
  setTitle("Sports cates");
  const productPrice = getPrice("p6-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product7() {
  setTitle("Single Relax Chair");
  const productPrice = getPrice("p7-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product8() {
  setTitle("Children play");
  const productPrice = getPrice("p8-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
}

function product9() {
  setTitle("Flexible Sofas");
  const productPrice = getPrice("p9-price");
  const prevTotal = getPrice("total-price");
  const newTotal = productPrice + prevTotal;
  checkValidation(newTotal);
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
