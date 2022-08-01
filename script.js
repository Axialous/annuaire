var donnees = JSON.parse(localStorage.getItem('annuaire')) || [];


var liste = document.getElementById('liste');

function afficher_donnees() {
    console.log('affichage');

    liste.innerHTML = ``;
    for (let i in donnees) {
        let donnee = donnees[i];
        liste.innerHTML += `<tr>
                                <td><input id="nom-${i}" type="text" contenteditable onchange="gerer_donnee(${i}, 'nom')" value="${donnee.nom}"></td>
                                <td><input id="numero-${i}" type="text" contenteditable onchange="gerer_donnee(${i}, 'numero')" value="${donnee.numero}"></td>
                            </tr>`;
    }
}

function gerer_donnee(i, type) {
    console.log('gestion');

    donnees[i][type] = document.getElementById(`${type}-${i}`).value;
    verifier_donnees();
    sauvegarder_donnees();
    afficher_donnees();
}

function verifier_donnees() {
    console.log('verification');

    let donnees_vides = []
    for (let i in donnees) {
        let donnee = donnees[i];
        if (donnee.nom == "" && donnee.numero == "") {
            donnees_vides.splice(0, 0, i)
        }
    }
    for (let i of donnees_vides) {
        donnees.splice(i, 1);
    }
    donnees.splice(0, 0, {nom: "", numero: ""});
}

function sauvegarder_donnees() {
    console.log('sauvegarde');

    localStorage.setItem('annuaire', JSON.stringify(donnees));
}

verifier_donnees();
afficher_donnees();
    