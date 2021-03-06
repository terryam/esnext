class Trip { //Créer une classe Trip.
    constructor(id,name, imageUrl){ //outer un constructeur avec les propriétés : id, name, imageUrl.
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;

    }
    //Ajouter la méthode toString() à la classe Trip qui permet d'avoir Trip [paris, Paris, img/paris.jpg]
    //Afficher dans la console le résultat de son exécution sur l’objet parisTrip
    toString() {
        //return this.id +''+ this.name +''+ this.imageUrl;
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]"
    }
    //Ajouter un getter et un setter pour la propriété price.
    //La classe sauvegardera la valeur dans une variable privée appellée _price.
    // Setter
    set price(price) {
        this._price = price;
    }
    //Getter
    get price() {
        return this._price;
    }
    //Compléter la méthode toString() pour qu’elle affiche la valeur de _price(voir dans la methode)

    //Ajouter à la classe Trip une méthode statique getDefaultTrip() qui retourne une instance de la
    //classe Trip valorisée avec les informations suivantes :
    //◦ id : rio-de-janeiro
    //◦ name : Rio de Janeiro
    //◦ imageUrl : img/rio-de-janeiro.jpg
    static getDefaultTrip(){
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
    
}
/**
 * Heritage
 */
//Créer la classe FreeTrip qui étends Trip.
//• Elle se construit avec les informations suivantes : id, name et imageUrl. La propriété price est
//valorisé par défaut à 0.
class FreeTrip extends Trip{
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }
    //Redéfinir la méthode toString() dont le résultat est la concaténation de la chaîne de caractères
    //Free et du résultat de l’exécution de la méthode toString() de la classe Trip.
    toString(){
        return "Free" + super.toString();
    }

}

exports.FreeTrip = FreeTrip;

exports.Trip = Trip;