/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */

let firstname = prompt("Scrivi il tuo nome");
console.log(firstname);

let lastname = prompt("Scrivi il tuo cognome");
console.log(lastname);

let favoriteColor = prompt("Scrivi il tuo colore preferito");
console.log(favoriteColor);

let randomNumber = 23;
console.log(randomNumber);

let password = firstname+lastname+favoriteColor+randomNumber;

document.getElementById("titolo").innerHTML = `La tua password è: ${password}`;