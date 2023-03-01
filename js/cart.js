// main function
function updateProductInput(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-quantity');
    // "phone"+"-number" = "phone-number"
    let productNumber = caseInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;

    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value = productNumber;

    // total update (phone or case)

    const updateTotal = document.getElementById(product + '-price');
    updateTotal.innerText = productNumber * price;

    calculateTotal()
}

// total input field
function updateProduct(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}


// total calculate
function calculateTotal() {
    const phoneAmount = updateProduct('phone') * 1299;
    const caseAmonut = updateProduct('case') * 99;
    const macAmount = updateProduct('mac') * 1999;
    const subTotal = phoneAmount + caseAmonut + macAmount;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // sub-total
    document.getElementById('total-sub').innerText = subTotal;
    document.getElementById('total-tax').innerText = tax;
    document.getElementById('total-price').innerText = total;
}






// phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductInput('phone', 1299, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductInput('phone', 1299, false);
})

// case
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductInput('case', 99, true);
})

document.getElementById('case-minus').addEventListener('click', function () {

    updateProductInput('case', 99, false)
})

// macbook
document.getElementById('mac-plus').addEventListener('click', function () {
    updateProductInput('mac', 1999, true);
})
document.getElementById('mac-minus').addEventListener('click', function () {
    updateProductInput('mac', 1999, false);
})



// check out btn

document.getElementById('check-out').addEventListener('click', function () {
    alert('Thanks for purchasing our product 😊')
})





