var debut = ["Paw Patrol", "Petit ours brun", "Hayden" , "Les Octonauts", "Shiloh" , "Les lapins crétins", "Tchoupi" , "Iron Man", "Hulk", "Captain America", "Le gardien de la lune"];
var milieu = ["danse", "saute", "court" , "tape", "mange" , "crie" , "escalade" , "casse" , "joue"];
var fin = ["la toupie Bayblayde", "le flaste", "super vite" , "le dab", "des pierres" , "des mains" ,"une grande montagne" , "au babyfoot" , "au foot" , "dans son lit"];


function aleatoire (citation){
    var index = Math.round (Math.random () * (citation.length - 1));
    return citation [index];                         
}

console.log ( aleatoire(debut) + " " + aleatoire(milieu) + " " + aleatoire(fin) + ".");

