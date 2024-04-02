/**Dobbiamo prendere la select e sulle vaie opzioni calcolarci il prezzo del preventivo:
 * Il prezzo orario per una commissione varia in questo modo:
● se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
● se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
● se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora
 */
const backend = 20.50;
const frontend = 15.30;
const analisi = 33.60;

const oreLavoro = 8;

const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calcolaPreventivoSenzaSconto(onorarioAllOra) {
    const preventivoSenzaSconti = oreLavoro * onorarioAllOra;
    console.log(preventivoSenzaSconti)
    return preventivoSenzaSconti;
};

/*L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido 
e il prezzo finale viene calcolato senza applicare sconti. */
function calcolaPreventivoConSconto(preventivoSenzaSconti) {
    const scontoApplicato = preventivoSenzaSconti / 100 * 25;
    const prezzoScontato = preventivoSenzaSconti - scontoApplicato;
    console.log(prezzoScontato);
    return prezzoScontato;
}



function seCodiceScontoEValido(codiceSconto) {
    if (codiciValidi.includes(codiceSconto)) {
        return true;
    } else return false;

}


const inputCodiceSconto = document.getElementById("inputSconto");

function applicaPreventivo(codiceSconto, onorarioAllOra) {
    const eValido = seCodiceScontoEValido(codiceSconto)
    if (eValido) {
        const preventivoBase = calcolaPreventivoSenzaSconto(onorarioAllOra);
        const preventivoScontato = calcolaPreventivoConSconto(preventivoBase);
        return preventivoScontato
    } else {
        return calcolaPreventivoSenzaSconto(onorarioAllOra)
    }
}

const select = document.getElementById("selectId");
function leggiTipoOnorario() {
    const selectIdIndex = select.selectedIndex;
    const valorePreso = select.options[selectIdIndex];
    return valorePreso.value;
}


const btnForm = document.getElementById("btnForm");



btnForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const tipoOnorario = leggiTipoOnorario();
    if (tipoOnorario == "1") {
        const preventivoBackand = applicaPreventivo(inputCodiceSconto.value, backend);
        creaHTML(preventivoBackand)
    } else if (tipoOnorario == "2") {
        const preventivoFrontEnd = applicaPreventivo(inputCodiceSconto.value, frontend);
        creaHTML(preventivoFrontEnd)
    } else if (tipoOnorario == "3") {
        const preventivoAnalista = applicaPreventivo(inputCodiceSconto.value, analisi);
        creaHTML(preventivoAnalista)
    }
})


function creaHTML(prezzoPreventivo) {
   const prezzo= convertiInStringa(prezzoPreventivo)
    const padrePrezzo = document.getElementById("price");
    padrePrezzo.innerHTML += `
    <p class="fs-4">${prezzo.intera},
    <small class="text-body-secondary fw-light">${prezzo.decimale}</small>$</p>`
    
}


function convertiInStringa(prezzoPreventivo){
    const parteIntera= Math.floor(prezzoPreventivo);
    const parteDeimale = prezzoPreventivo - parteIntera;
    const parteDecimaleSenzaZero = Math.floor(parteDeimale * 100);

    return totale = {
        intera: parteIntera,
        decimale: parteDecimaleSenzaZero
    }
    
   
    
    
    
    
}


convertiInStringa(124.65);