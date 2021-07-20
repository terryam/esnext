/**
 * Let
 */
//Créer une variable favoriteCityId (à l’aide mot clé let) qui contient la chaîne de caractères :
//"rome".
let favoriteCityId ="rome";
console.log(favoriteCityId)

// Affecter une nouvelle valeur à la variable favoriteCityId : une chaînes de caractères : "paris".
favoriteCityId = "Paris";
console.log(favoriteCityId)

/**
 * const
 */
const citiesId=["paris","nyc","rome","rio-de-janeiro"];
console.log(citiesId)
// Affecter une nouvelle valeur à la constante citiesId : un tableau vide par exemple. Que
//constatez-vous dans la console ? 
// citiesId =[]; // Mettre en commentaire la ligne de code de la nouvellen affectation.
citiesId.push("tokyo");  // j'ajoute un élément en fin de tableau
console.log(citiesId)

/**
 * Création d'objet
 */
//Créer une fonction getWeather qui possède un paramètre cityId.
function getWeather(cityId) {
    // ajouter 2 variables locales
    let city = cityId; // city qui stocke la valeur du paramètre cityId en lettres majuscules.
    let temperature = 20;
    // Utiliser la nouvelle syntaxe ES2015, pour retourner un objet de la forme {city: "PARIS",
    //temperature: 20}.
    return {city ,temperature}
    
}
const weather = getWeather(favoriteCityId.toUpperCase()) // Créer une constante weather qui exécute la fonction getWeather en lui passant en paramètre
//favoriteCityId.
console.log(weather) // Afficher dans la console constante weather

/**
 * Affectation destructurée
 * = raccourci permettant d’affecter des variables à partir d’objets
 */
// Avec la nouvelle syntaxe d’affectation destructurée, créer deux constantes city et temperature
//qui récupèrent leurs valeurs à partir de la constante weather.

const {city, temperature} = weather;

console.log(city);
console.log(temperature);


/**
 * Rest operator
 */
//A l’aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et
//othersCitiesId.
const [parisId, nycId, ...othersCities] = citiesId;
//Afficher dans la console la valeur de constante parisId.
console.log(parisId);
//Afficher dans la console la valeur de constante nycId.
console.log(nycId);
// Afficher dans la console la taille du tableau othersCitiesId.
console.log(othersCities.length);

/**
 * Classe
 * Le mot clé class permet de créer une classe.
   La méthode constructor définit le constructeur de la classe.
   Il est possible de définir dynamiquement des champs.
   Le mot clé this définit les champs d’une classe.
 */
    // Créer un objet parisTrip avec la classe Trip avec les informations suivantes :
    //◦ id : paris
    //◦ name : Paris
    //◦ imageUrl : img/paris.jpg
    const module1 = require('./module1');
    parisTrip = new module1.Trip("paris","Paris", "imp/paris.jpg");
    //◦ Afficher dans la console :
    //▪ l’objet parisTrip.
    //▪ la propriété name de l’objet parisTrip.
    console.log(parisTrip);
    console.log(parisTrip.name);
    // Vérifier le résultat dans la console.




