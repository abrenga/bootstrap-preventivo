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
    return preventivoSenzaSconti
};

/*L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido 
e il prezzo finale viene calcolato senza applicare sconti. */
function preventivoConCodiceSconto(preventivoSenzaSconti) {
    let scontoApplicato = preventivoSenzaSconti / 100 * 25;
    let prezzoScontato = preventivoSenzaSconti - scontoApplicato;
    return prezzoScontato
}



function seCodiceScontoEValido(string) {
    if (codiciValidi.includes(string)) {
        return true;
    } else return false;

}


function applicaSconto() {
    const eValido = seCodiceScontoEValido(string)
    if (eValido) {
        let preventivoBase = calcolaPreventivoSenzaSconto(onorarioAllOra);
        preventivoConCodiceSconto(preventivoBase);
    } else {
        calcolaPreventivoSenzaSconto(onorarioAllOra)
    }
}



const select = document.getElementById("selectId");
const selectIdIndex = select.selectIdIndex;
const valorePreso = select.options[selectIdIndex];

console.log(valorePreso.value);

