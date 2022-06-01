// plusieurs pages sur 1 seul écran
function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}


// variables declaration
let prestations = {
    "static": 2000,
    "wordpress": 3000,
    "specific": 4000,
    "audit": 3000
}
let panier = {};

let listing = document.querySelector("#listing");
let prixTotal = document.querySelector("#prixTotal");
let vider = document.querySelector("#vider");
let enregistrer = document.querySelector("#enregistrer");


// functions
function afficherPanier(panier) {
    let listPresta = "";
    for (let presta in panier) {
        listPresta += presta + " " + panier[presta] + "<br>"
        listing.innerHTML = listPresta;
    }
}

function afficherPrixTotal(panier) {
    let prix = 0;
    for (let presta in panier) {
        prix += panier[presta];
        prixTotal.innerHTML = prix;
    }
}

function viderPanier() {
    panier = {};
    listing.innerHTML = "";
    prixTotal.innerHTML = null;

    let checkboxes = document.querySelectorAll('.checkbox');
    for (let checkbox of checkboxes) {
        checkbox.checked = false;
    };
}

// eventListeners
for (let prestation in prestations) {
    let inputName = prestation;
    let inputPrice = prestations[prestation];
    let input = document.querySelector("#" + inputName);

    input.addEventListener("click", function () {
        if (input.checked == true) {
            // on ajoute la prestation au panier
            panier[inputName] = inputPrice;
        } else {
            // on retire la prestation du panier
            delete panier[inputName];
            listing.innerHTML = "";
            prixTotal.innerHTML = null;
        }
        console.log(panier);
        // on affiche le panier détaillé
        afficherPanier(panier);

        // on affiche le prix total
        afficherPrixTotal(panier);

    })

}

// décocher une prestation


// vider le panier
vider.addEventListener("click", function () {
    viderPanier();
})

//recevoir la simulation par mail
recevoir.addEventListener("click", function () {
    let email = document.querySelector("#email");
    //  A CODER AVEC PHP
})
