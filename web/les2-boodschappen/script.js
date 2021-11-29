console.log("Test")

const groentevak = document.getElementById('groente')
const fruitvak = document.getElementById('fruit')

function ZetInFruitLa(fruit){

    console.log("Zet,", fruit, "in fruit la.");
    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = (fruit);
    fruitvak.appendChild(nieuwElement);
}

function ZetInGroenteLa(groente){

    console.log("Zet,", groente, "in groente la.")
    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = (groente);
    groentevak.appendChild(nieuwElement);
}

