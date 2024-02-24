function voegNaamToe(array, naam) {
    array.push(naam);
}

var familieleden = ["Nathalie", "Bernard", "Theo", "Roza", "Tessa"];

console.log("Aantal elementen in de array: " + familieleden.length);

console.log("Eerste element: " + familieleden[0]);
console.log("Derde element: " + familieleden[2]);
console.log("Vijfde element: " + familieleden[4]);

var nieuweNaam = prompt("Voer een nieuwe naam in:");
voegNaamToe(familieleden, nieuweNaam);
console.log("Naam toegevoegd: " + nieuweNaam);
console.log("Array na toevoegen van nieuwe naam: " + familieleden);

var arrayAlsString = familieleden.join(", ");
console.log("Array als string: " + arrayAlsString);
