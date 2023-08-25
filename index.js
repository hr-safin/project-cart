let count1 = 0;
let count2 = 0;
let count3 = 0;

let price1 = 44.0;
let price2 = 100.0;
let price3 = 120.0;
const countPrice = document.getElementById("added-price");
let countPriceValue = parseFloat(countPrice.innerText);
const countItem = document.getElementById("count-item");
let countValue = parseFloat(countItem.innerText);
const total = document.getElementById("total-price");
const totalPriceValue = parseFloat(total.innerText);
document.getElementById("inc1").addEventListener("click", function () {
  count1++;
  const input1 = document.getElementById("input1");
  const firstPrice = document.getElementById("first-price");
  const firstPriceValue = parseFloat(firstPrice.innerText);

  countPriceValue = countPriceValue + price1;
  countPrice.innerText = countPriceValue.toFixed(2);
  total.innerText = (countPriceValue + 5).toFixed(2);
  firstPrice.innerText = (firstPriceValue + 44).toFixed(2);
  countItem.innerText = count1;
  input1.value = count1;

  const purchase = document.getElementById("purchase-btn");
  purchase.disabled = true;

  if (countPriceValue > 0) {
    purchase.disabled = false;
  } else {
    purchase.disabled = true;
  }

  purchase.addEventListener("click", function () {
    alert("you purchase the product");
    countPrice.innerText = "0.00"
    total.innerText = "0.00"
    firstPrice.innerText = "0.00"
    countItem.innerText = "";
    count1 =0
    input1.value = "0";
    countPriceValue = 0
  });
  const promoCode = document.getElementById("promo-code");
  const discountButton = document.getElementById("discount-btn");
  discountButton.disabled = true;
  if (countPriceValue >= 200) {
    discountButton.disabled = false;
  } else {
    discountButton.disabled = true;
  }
  discountButton.addEventListener("click", function () {
    if (promoCode.value === "SELL200" && countPriceValue >= 200) {
      const grandTotal = countPriceValue * 0.2;
      const newTotal = countPriceValue - grandTotal;
      total.innerText = newTotal.toFixed(2);
      promoCode.value = "";
      discountButton.disabled = true;
    }
  });
});

const decCrementButton1 = document.getElementById("dec1");
const input1 = document.getElementById("input1");

decCrementButton1.addEventListener("click", function () {
  if (count1 > 0) {
    count1--;
    const firstPrice = document.getElementById("first-price");
    const firstPriceValue = parseFloat(firstPrice.innerText);

    countPriceValue = countPriceValue - price1;
    countPrice.innerText = countPriceValue.toFixed(2);
    total.innerText = (countPriceValue + 5).toFixed(2);
    firstPrice.innerText = (firstPriceValue - 44).toFixed(2);
    countItem.innerText = count1;
    input1.value = count1;
    if (count2 === 0) {
        decCrementButton2.setAttribute("disabled", true);
      }

    const purchase = document.getElementById("purchase-btn");
  purchase.disabled = true;

  if (countPriceValue > 0) {
    purchase.disabled = false;
  } else {
    purchase.disabled = true;
  }

  purchase.addEventListener("click", function () {
    alert("you purchase the product");
    countPrice.innerText = "0.00"
    total.innerText = "0.00"
    firstPrice.innerText = "0.00"
    countItem.innerText = "";
    count1 =0
    input1.value = "0";
    countPriceValue = 0
  });
  const promoCode = document.getElementById("promo-code");
  const discountButton = document.getElementById("discount-btn");
  discountButton.disabled = true;
  if (countPriceValue >= 200) {
    discountButton.disabled = false;
  } else {
    discountButton.disabled = true;
  }
  discountButton.addEventListener("click", function () {
    if (promoCode.value === "SELL200" && countPriceValue >= 200) {
      const grandTotal = countPriceValue * 0.2;
      const newTotal = countPriceValue - grandTotal;
      total.innerText = newTotal.toFixed(2);
      promoCode.value = "";
      discountButton.disabled = true;
    }
  });
  }
});

// second

document.getElementById("inc2").addEventListener("click", function () {
  count2++;
  const input2 = document.getElementById("input2");
  const secondPrice = document.getElementById("second-price");
  const secondPriceValue = parseFloat(secondPrice.innerText);

  countPriceValue = countPriceValue + price2;
  countPrice.innerText = countPriceValue.toFixed(2);
  total.innerText = (countPriceValue + 5).toFixed(2);
  secondPrice.innerText = (secondPriceValue + 100).toFixed(2);
  countItem.innerText = count2;
  input2.value = count2;
  const purchase = document.getElementById("purchase-btn");
  purchase.disabled = true;

  if (countPriceValue > 0) {
    purchase.disabled = false;
  } else {
    purchase.disabled = true;
  }

  purchase.addEventListener("click", function () {
    alert("you purchase the product");
    countPrice.innerText = "0.00"
    total.innerText = "0.00"
    secondPrice.innerText = "0.00"
    countItem.innerText = "";
    count2 =0
    input2.value = "0";
    countPriceValue = 0
  });
  const promoCode = document.getElementById("promo-code");
  const discountButton = document.getElementById("discount-btn");
  discountButton.disabled = true;
  if (countPriceValue >= 200) {
    discountButton.disabled = false;
  } else {
    discountButton.disabled = true;
  }
  discountButton.addEventListener("click", function () {
    if (promoCode.value === "SELL200" && countPriceValue >= 200) {
      const grandTotal = countPriceValue * 0.2;
      const newTotal = countPriceValue - grandTotal;
      total.innerText = newTotal.toFixed(2);
      promoCode.value = "";
      discountButton.disabled = true;
    }
  });
});

const decCrementButton2 = document.getElementById("dec2");

decCrementButton2.addEventListener("click", function () {
  if (count2 > 0) {
    count2--;
    const input2 = document.getElementById("input2");
    const secondPrice = document.getElementById("second-price");
    const secondPriceValue = parseFloat(secondPrice.innerText);

    countPriceValue = countPriceValue - price2;
    countPrice.innerText = countPriceValue.toFixed(2);
    total.innerText = (countPriceValue + 5).toFixed(2);
    secondPrice.innerText = (secondPriceValue - 100).toFixed(2);
    countItem.innerText = count2;
    input2.value = count2;

    if (count2 === 0) {
      decCrementButton2.setAttribute("disabled", true);
    }
    const purchase = document.getElementById("purchase-btn");
  purchase.disabled = true;

  if (countPriceValue > 0) {
    purchase.disabled = false;
  } else {
    purchase.disabled = true;
  }

  purchase.addEventListener("click", function () {
    alert("you purchase the product");
    countPrice.innerText = "0.00"
    total.innerText = "0.00"
    secondPrice.innerText = "0.00"
    countItem.innerText = "";
    count2 =0
    input2.value = "0";
    countPriceValue = 0
  });
  const promoCode = document.getElementById("promo-code");
  const discountButton = document.getElementById("discount-btn");
  discountButton.disabled = true;
  if (countPriceValue >= 200) {
    discountButton.disabled = false;
  } else {
    discountButton.disabled = true;
  }
  discountButton.addEventListener("click", function () {
    if (promoCode.value === "SELL200" && countPriceValue >= 200) {
      const grandTotal = countPriceValue * 0.2;
      const newTotal = countPriceValue - grandTotal;
      total.innerText = newTotal.toFixed(2);
      promoCode.value = "";
      discountButton.disabled = true;
    }
  });
  }
});

// third

document.getElementById("inc3").addEventListener("click", function () {
  count3++;
  const input3 = document.getElementById("input3");
  const thirdPrice = document.getElementById("third-price");
  const thirdPriceValue = parseFloat(thirdPrice.innerText);

  countPriceValue = countPriceValue + price3;
  countPrice.innerText = countPriceValue.toFixed(2);
  total.innerText = (countPriceValue + 5).toFixed(2);
  thirdPrice.innerText = (thirdPriceValue + 120).toFixed(2);
  countItem.innerText = count2;
  input3.value = count2;
  const purchase = document.getElementById("purchase-btn");
  purchase.disabled = true;

  if (countPriceValue > 0) {
    purchase.disabled = false;
  } else {
    purchase.disabled = true;
  }

  purchase.addEventListener("click", function () {
    alert("you purchase the product");
    countPrice.innerText = "0.00"
    total.innerText = "0.00"
    thirdPrice.innerText = "0.00"
    countItem.innerText = "";
    count3 =0
    input3.value = "0";
    countPriceValue = 0
  });
  const promoCode = document.getElementById("promo-code");
  const discountButton = document.getElementById("discount-btn");
  discountButton.disabled = true;
  if (countPriceValue >= 200) {
    discountButton.disabled = false;
  } else {
    discountButton.disabled = true;
  }
  discountButton.addEventListener("click", function () {
    if (promoCode.value === "SELL200" && countPriceValue >= 200) {
      const grandTotal = countPriceValue * 0.2;
      const newTotal = countPriceValue - grandTotal;
      total.innerText = newTotal.toFixed(2);
      promoCode.value = "";
      discountButton.disabled = true;
    }
  });
});

const decCrementButton3 = document.getElementById("dec3");

decCrementButton3.addEventListener("click", function () {
  if (count3 > 0) {
    count3--;
    const input3 = document.getElementById("input3");
    const thirdPrice = document.getElementById("third-price");
    const thirdPriceValue = parseFloat(thirdPrice.innerText);

    countPriceValue = countPriceValue - price3;
    countPrice.innerText = countPriceValue.toFixed(2);
    total.innerText = (countPriceValue + 5).toFixed(2);
    thirdPrice.innerText = (thirdPriceValue - 120).toFixed(2);
    countItem.innerText = count3;
    input3.value = count3;
    if (count3 === 0) {
      decCrementButton3.setAttribute("disabled", true);
    }
    const purchase = document.getElementById("purchase-btn");
  purchase.disabled = true;

  if (countPriceValue > 0) {
    purchase.disabled = false;
  } else {
    purchase.disabled = true;
  }

  purchase.addEventListener("click", function () {
    alert("you purchase the product");
    countPrice.innerText = "0.00"
    total.innerText = "0.00"
    thirdPrice.innerText = "0.00"
    countItem.innerText = "";
    count3 =0
    input3.value = "0";
    countPriceValue = 0
  });
  const promoCode = document.getElementById("promo-code");
  const discountButton = document.getElementById("discount-btn");
  discountButton.disabled = true;
  if (countPriceValue >= 200) {
    discountButton.disabled = false;
  } else {
    discountButton.disabled = true;
  }
  discountButton.addEventListener("click", function () {
    if (promoCode.value === "SELL200" && countPriceValue >= 200) {
      const grandTotal = countPriceValue * 0.2;
      const newTotal = countPriceValue - grandTotal;
      total.innerText = newTotal.toFixed(2);
      promoCode.value = "";
      discountButton.disabled = true;
    }
  });
  }
});
