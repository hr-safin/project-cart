let count =0
let total =0
document.getElementById("dec1").addEventListener("click", function(){
    count--
    const inc1 = document.getElementById("input1")
    const firstPrice = document.getElementById("first-price")
    const firstPriceValue = parseFloat(firstPrice.innerText)
    const firstPriceValueFix = firstPriceValue.toFixed(2)
    
     const countItem = document.getElementById("count-item")
     const countPrice = document.getElementById("added-price")

     countItem.innerText = count
     countPrice.innerText = (firstPriceValue - 44).toFixed(2)
    
    // const newTotal = totalF + firstPriceValue
    firstPrice.innerText = (firstPriceValue - 44).toFixed(2)
    
    inc1.value = count
})
document.getElementById("dec2").addEventListener("click", function(){
    count--
    const inc2 = document.getElementById("input2")
    const firstPrice = document.getElementById("first-price")
    const firstPriceValue = parseFloat(firstPrice.innerText)
    const firstPriceValueFix = firstPriceValue.toFixed(2)
    
     const countItem = document.getElementById("count-item")
     const countPrice = document.getElementById("added-price")

     countItem.innerText = count
     countPrice.innerText = (firstPriceValue - 44).toFixed(2)
    
    // const newTotal = totalF + firstPriceValue
    firstPrice.innerText = (firstPriceValue - 44).toFixed(2)
    
    inc2.value = count
})
document.getElementById("dec3").addEventListener("click", function(){
    count--
    const inc3 = document.getElementById("input3")
    const firstPrice = document.getElementById("first-price")
    const firstPriceValue = parseFloat(firstPrice.innerText)
    const firstPriceValueFix = firstPriceValue.toFixed(2)
    
     const countItem = document.getElementById("count-item")
     const countPrice = document.getElementById("added-price")

     countItem.innerText = count
     countPrice.innerText = (firstPriceValue - 44).toFixed(2)
    
    // const newTotal = totalF + firstPriceValue
    firstPrice.innerText = (firstPriceValue - 44).toFixed(2)
    
    inc3.value = count
})


document.getElementById("inc1").addEventListener("click", function(){
    count++
    const inc1 = document.getElementById("input1")
    const firstPrice = document.getElementById("first-price")
    const firstPriceValue = parseFloat(firstPrice.innerText)
    const firstPriceValueFix = firstPriceValue.toFixed(2)
    
     const countItem = document.getElementById("count-item")
     const countPrice = document.getElementById("added-price")

     countItem.innerText = count
     countPrice.innerText = (firstPriceValue + 44).toFixed(2)
    
    // const newTotal = totalF + firstPriceValue
    firstPrice.innerText = (firstPriceValue + 44).toFixed(2)
    
    inc1.value = count
})

document.getElementById("inc2").addEventListener("click", function(){
    count++
    const inc2 = document.getElementById("input2")
    const firstPrice = document.getElementById("second-price")
    const firstPriceValue = parseFloat(firstPrice.innerText)
    const firstPriceValueFix = firstPriceValue.toFixed(2)
    
     const countItem = document.getElementById("count-item")
     const countPrice = document.getElementById("added-price")

     countItem.innerText = count
     countPrice.innerText = (firstPriceValue + 44).toFixed(2)
    
    // const newTotal = totalF + firstPriceValue
    firstPrice.innerText = (firstPriceValue + 44).toFixed(2)
    
    inc2.value = count
})

document.getElementById("inc3").addEventListener("click", function(){
    count++
    const inc3 = document.getElementById("input3")
    const firstPrice = document.getElementById("first-price")
    const firstPriceValue = parseFloat(firstPrice.innerText)
    const firstPriceValueFix = firstPriceValue.toFixed(2)
    
     const countItem = document.getElementById("count-item")
     const countPrice = document.getElementById("added-price")

     countItem.innerText = count
     countPrice.innerText = (firstPriceValue + 44).toFixed(2)
    
    // const newTotal = totalF + firstPriceValue
    firstPrice.innerText = (firstPriceValue + 44).toFixed(2)
    
    inc3.value = count
})


const removeButton = document.querySelectorAll(".remove")
const parentDiv = document.querySelectorAll(".product")

for(let i=0; i<removeButton.length; i++){
    
    removeButton[i].addEventListener("click", function(){
        let parentDiv = this.parentElement
        parentDiv.parentNode.removeChild(parentDiv)
        
    })
}