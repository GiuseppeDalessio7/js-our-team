
/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */

const team = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder e Ceo",
        foto : "./assets/img/wayne-barnett-founder-ceo.jpg"

    },

    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "./assets/img/angela-caroll-chief-editor.jpg"

    },

    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "./assets/img/walter-gordon-office-manager.jpg"

    },

    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "./assets/img/angela-lopez-social-media-manager.jpg"

    },

    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "./assets/img/scott-estrada-developer.jpg"

    },

    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "./assets/img/barbara-ramos-graphic-designer.jpg"

    },

 /*
 MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 */

];

const printElement = document.querySelector('.print')
console.log(printElement);

for (let i = 0; i < team.length; i++) {
    const allTeam = team[i];
    console.log(allTeam);


    for (const memberTeam in allTeam) {
     

        console.log(allTeam[memberTeam]);
    }
    
    //Trasformare la stringa foto in una immagine effettiva
    const markup = `<div class="card text-start">
    <img class="card-img-top w-100" src="${allTeam.foto}"  alt="Title">
    <div class="card-body bg-me">
      <h4 class="card-title">${allTeam.nome}</h4>
      <p class="card-text text-danger fs-5">${allTeam.ruolo}</p>
    </div>
  </div>
`
/* 
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

printElement.insertAdjacentHTML("beforeend",markup)
}

/*
BONUS 1:
Trasformare la stringa foto in una immagine effettiva // inserito nel markup
BONUS 2:
Organizzare i singoli membri in card/schede  inserito nel markup
*/

