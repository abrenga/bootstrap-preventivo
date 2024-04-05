const backend = 20.50;
const frontend = 15.30;
const analisi = 33.60;

const hoursOfWork = 8;

const validCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
const codeDiscountInput = document.getElementById("inputSconto");
const btnForm = document.getElementById("btnForm");
const condition = document.getElementById("exampleCheck1");



/*Resetta il form appena ricaricata la pagina */
window.addEventListener("load", (e) => {
    resetForm();
});


// ritorna true se lo sconto è valido
function isDiscountCodeValid(discountCode) {
    return validCodes.includes(discountCode);
};


function calculateBill(withDiscount, pricePerHour) {
    const billNoDiscount = hoursOfWork * pricePerHour;
    if (withDiscount) {
        const appliedDiscount = billNoDiscount / 100 * 25;
        const discountPrice = billNoDiscount - appliedDiscount;
        return discountPrice;
    } else {
        return billNoDiscount;
    }

};


// calcola se l'utente ha diritto allo sconto e risponde di conseguenza
function ifIsDiscount(discountCode, pricePerHour) {
    const isValid = isDiscountCodeValid(discountCode)
    if (isValid && discountCode !== "") {

        return calculateBill(true, pricePerHour);
    } else {
        if (discountCode !== "") {
            alert("sodice sconto inserto non valido, verrà calcolato il prezzo base")
        };
    };
    return calculateBill(false, pricePerHour);
};


// seleziona l'opzion
const select = document.getElementById("selectId");
function readPricePerHourType() {
    const selectIdIndex = select.selectedIndex;
    const option = select.options[selectIdIndex];
    return option.value;
};


// seleziona la categoria di lavoro selezionata
function SelectCatregory() {
    const pricePerHourType = readPricePerHourType();
    let category = null;
    if (pricePerHourType == "backend") {
        category = backend;
    } else if (pricePerHourType == "frontend") {
        category = frontend;
    } else if (pricePerHourType == "analysis") {
        category = analisi;
    }
    return category;
};

// ascolta l'evento sul bottone submit per il form
btnForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = SelectCatregory();
    const price = ifIsDiscount(codeDiscountInput.value, category);
    createHTML(price);
});

// genera l'HTML
function createHTML(billPrice) {
    const price = breakPriceComponents(billPrice)
    const idParent = document.getElementById("price");

    const formattedDecimal = price.decimal.toLocaleString("en", { minimumIntegerDigits: 2 });

    idParent.innerHTML = `
    <p class="fs-4 fw-bold">€${price.integer},
    <small class="text-body-secondary fw-light">${formattedDecimal}</small></p>`
};


// scompone la cifra da visualizzare in parte intera e decimale
function breakPriceComponents(billPrice) {
    const integerComponent = Math.floor(billPrice);
    const decimalComponent = billPrice - integerComponent;

    return {
        integer: integerComponent,
        decimal: Math.floor(decimalComponent * 100)
    };
}

//input
const arrayNodi = [
    nome = document.getElementById("nome"),
    surname = document.getElementById("cognome"),
    mail = document.getElementById("exampleInputEmail1"),
];



//resetta il form
function resetForm() {
    arrayNodi.forEach(nodo => {
        nodo.value = "";
        codeDiscountInput.value = "";
        condition.checked = false;
    });
};


//valida i vari imput
function initializeFormInputs() {
    for (let i = 0; i < arrayNodi.length; i++) {
        const node = arrayNodi[i];
        node.addEventListener("change", (e) => {
            isValidate(node)
        });
    };
};

//aggiunge le classi per la validazione
function isValidate(node) {
    if (node.value == "" || node.value == undefined) {
        node.classList.add("is-invalid");
        node.classList.remove("is-valid");
    }
    else {
        node.classList.add("is-valid");
        node.classList.remove("is-invalid");
    };
};


initializeFormInputs();



