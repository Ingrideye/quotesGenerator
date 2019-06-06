var debut = ["Le talent", "Si le bonheur existe", "L'homme absurde", "Rien", "Aimer sans doute", "Le beau"];
var milieu = ["c'est", "c'est", "ne développe", "est", "est", "est"];
var fin = ["une question d'amour", "une preuve d'artiste", "l'intelligence comme les voyages", "celui qui ne change jamais", "le possible le plus lointain", "ce qu'on ne peut pas vouloir changer"];

var debut1 = ["Paw Patrol", "Petit ours brun", "Hayden" , "Les Octonauts", "Shiloh" , "Les lapins crétins", "Tchoupi" , "Iron Man", "Hulk", "Captain America", "Le gardien de la lune"];
var milieu1 = ["danse", "saute", "court" , "tape", "mange" , "crie" , "escalade" , "casse" , "joue"];
var fin1 = ["la toupie Bayblayde", "le flaste", "super vite" , "le dab", "des pierres" , "des mains" ,"une grande montagne" , "au babyfoot" , "au foot" , "dans son lit"];


function aleatoire(citation) {
    var index = Math.round(Math.random() * (citation.length - 1));
    return citation[index];
}


console.log("Bienvenue dans mon générateur de citations parents VS enfants!");



var quitter = 2   // on initialise le compteur
while(quitter !== "1"){
    quitter = prompt(" Tapez 1 pour quitter ou 2 pour continuer");
    if (quitter === "2") {
        afficheCitations();
    } else if (quitter === "1") {
        console.log("Au revoir! ");
        console.log("Ou vous pouvez recharger la page pour relancer le programme :)");
    } else {
        console.log("Je n'ai pas compris votre choix. ");
    }
}
    


function afficheCitations() {
    console.log("Choisissez une thématique de citations\n A : citations pensées et écrites par des parents\n B : citations pensées et écrites par des enfants");
    var categorie = prompt("Tapez A pour des citations pensées et écrites par des parents et B pour des citations pensées et écrites par des enfants:");
    var nombreCitations = Number(prompt("Veuillez choisir un nombre de citation générées entre 1 et 5 :"));

    if ((categorie === "A" || categorie === "B") && (nombreCitations > 0 && nombreCitations <= 5)) {
        for (var i = 0; i < nombreCitations; i++) {
            if (categorie === "A") {
                console.log(aleatoire(debut) + " " + aleatoire(milieu) + " " + aleatoire(fin) + ".");
            } else if (categorie === "B") {
                console.log(aleatoire(debut1) + " " + aleatoire(milieu1) + " " + aleatoire(fin1) + ".");
            } 
        }
    } else {
        console.log("Je n'ai pas compris votre choix. ");
    } 
}
 

    















