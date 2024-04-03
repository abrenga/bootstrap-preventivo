/**Dobbiamo prendere la select e sulle vaie opzioni calcolarci il prezzo del preventivo:
 * Il prezzo orario per una commissione varia in questo modo:
● se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
● se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
● se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora
 */
const backend = 20.50;
const frontend = 15.30;
const analisi = 33.60;

const hoursOfWork = 8;

const validCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calculateBillNoDiscount(pricePerHour) {
    const billNoDiscount = hoursOfWork * pricePerHour;
    console.log(billNoDiscount)
    return billNoDiscount;
};

/*L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido 
e il prezzo finale viene calcolato senza applicare sconti. */
function calculateBillDiscount(billNoDiscount) {
    const appliedDiscount = billNoDiscount / 100 * 25;
    const discountPrice = billNoDiscount - appliedDiscount;
    console.log(discountPrice);
    return discountPrice;
}



function isDiscountCodeValid(discountCode) {
    if (validCodes.includes(discountCode)) {
        return true;
    } else return false;

}


const codeDiscountInput = document.getElementById("inputSconto");

function calculateBill(discountCode, pricePerHour) {
    const isValid = isDiscountCodeValid(discountCode)
    if (isValid) {
        const baseBill = calculateBillNoDiscount(pricePerHour);
        const discountBill = calculateBillDiscount(baseBill);
        return discountBill
    } else {
        return calculateBillNoDiscount(pricePerHour)
    }
}

const select = document.getElementById("selectId");
function readPricePerHourType() {
    const selectIdIndex = select.selectedIndex;
    const option = select.options[selectIdIndex];
    return option.value;
}


const btnForm = document.getElementById("btnForm");



btnForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pricePerHourType = readPricePerHourType();
    let category = null;
    if (pricePerHourType == "1") {
        category = backend;

    } else if (pricePerHourType == "2") {
        category = frontend;
    } else if (pricePerHourType == "3") {
        category = analisi;
    }

    const price = calculateBill(codeDiscountInput.value, category);
    createHTML(price);
});


function createHTML(billPrice) {
    const price = breakPriceComponents(billPrice)
    const idParent = document.getElementById("price");
    idParent.innerHTML = `
    <p class="fs-4 fw-bold">€${price.integer},
    <small class="text-body-secondary fw-light">${price.decimal}</small></p>`
};


function breakPriceComponents(billPrice) {
    const integerComponent = Math.floor(billPrice);
    const decimalComponent = billPrice - integerComponent;


    return {
        integer: integerComponent,
        decimal: Math.floor(decimalComponent * 100)
    };
}


const arrayNodi = [
    nome = document.getElementById("nome"),
    surname = document.getElementById("cognome"),
    mail = document.getElementById("exampleInputEmail1"),
    condition = document.getElementById("exampleCheck1"),
]





function isFormValidate() {
    for (let i = 0; i < arrayNodi; i++) {
        arrayNodi[i].addEventListener("click", (e) => {
            if (arrayNodi[i].value == "" || arrayNodi[i].value == undefined) {
                arrayNodi[i].classList.add(" is-invalid")
            }
            else {
                arrayNodi[i].classList.add("is-valid")
            }
        })



    }
};

isFormValidate();