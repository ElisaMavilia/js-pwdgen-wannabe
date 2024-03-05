/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */

let firstName = prompt("Scrivi il tuo nome");
console.log(firstName);

let lastName = prompt("Scrivi il tuo cognome");
console.log(lastName);

let favoriteColor = prompt("Scrivi il tuo colore preferito");
console.log(favoriteColor);

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

let password = firstName+lastName+favoriteColor+randomNumber;

document.getElementById("titolo").innerHTML = `La tua password è: ${password}`;