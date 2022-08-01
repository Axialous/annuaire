var donnees = [
    {nom: "Jean Dupond", numero: "03.86.24.18.32"},
    {nom: "Jacques Dupont", numero: "03.86.28.19.45"}
];

var liste = document.getElementById('liste');

function afficher_donnees() {
    verifier_donnees();
    liste.innerHTML = ``;
    for (let i in donnees) {
        let donnee = donnees[i];
        liste.innerHTML += `<tr>
                                <td><input id="nom-${i}" type="text" contenteditable onchange="gerer_donnee(${i}, 'nom')" value="${donnee.nom}"></td>
                                <td><input id="numero-${i}" type="text" contenteditable onchange="gerer_donnee(${i}, 'numero')" value="${donnee.numero}"></td>
                            </tr>`;
    }
    console.log('affichage');
}

function gerer_donnee(i, type) {
    console.log('gestion');
    donnees[i][type] = document.getElementById(`${type}-${i}`).value;
    afficher_donnees();
}

function verifier_donnees() {
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
    console.log('verification')
}

afficher_donnees();
    