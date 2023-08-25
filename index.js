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

  const purchase = document.getElementById("purchase-btn");
  purchase.disabled = true;
  countPriceValue = countPriceValue + price1;
  countPrice.innerText = countPriceValue.toFixed(2);
  total.innerText = countPriceValue.toFixed(2);
  firstPrice.innerText = (firstPriceValue + 44).toFixed(2);
  countItem.innerText = count1;
  input1.value = count1;

  if (countPriceValue > 0) {
    purchase.disabled = false;
  } else {
    purchase.disabled = true;
  }
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
    total.innerText = countPriceValue.toFixed(2);
    firstPrice.innerText = (firstPriceValue - 44).toFixed(2);
    countItem.innerText = count1;
    input1.value = count1;

    const purchase = document.getElementById("purchase-btn");
    purchase.disabled = true;
    if (countPriceValue > 0) {
        purchase.disabled = false;
      } else {
        purchase.disabled = true;
      }

    if (count1 === 0) {
      decCrementButton1.setAttribute("disabled", true);
    }
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
  total.innerText = countPriceValue.toFixed(2);
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
    total.innerText = countPriceValue.toFixed(2);
    secondPrice.innerText = (secondPriceValue - 100).toFixed(2);
    countItem.innerText = count2;
    input2.value = count2;
    const purchase = document.getElementById("purchase-btn");
    purchase.disabled = true;
    if (countPriceValue > 0) {
        purchase.disabled = false;
      } else {
        purchase.disabled = true;
      }

    if (count2 === 0) {
      decCrementButton2.setAttribute("disabled", true);
    }
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
  total.innerText = countPriceValue.toFixed(2);
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
    total.innerText = countPriceValue.toFixed(2);
    thirdPrice.innerText = (thirdPriceValue - 120).toFixed(2);
    countItem.innerText = count3;
    input3.value = count3;
    const purchase = document.getElementById("purchase-btn");
    purchase.disabled = true;
    if (countPriceValue > 0) {
        purchase.disabled = false;
      } else {
        purchase.disabled = true;
      }
    if (count3 === 0) {
      decCrementButton3.setAttribute("disabled", true);
    }
  }
});
