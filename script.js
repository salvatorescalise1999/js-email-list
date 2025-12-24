// get DOM element
const emailList = document.getElementById(`email-list`);

// boolean API endpoint
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

// numero di email da generare
const numbersEmails = 10;

for (let i = 0; i < numbersEmails; i++) {
    axios.get(endpoint)
        .then(response => {
            // codice da eseguire in caso di successo:
            const li = document.createElement("li");
            li.textContent = response.data.response;
            emailList.appendChild(li);
        })       
        .catch(error => {
            // codice da eseguire in caso di errore:
            console.error(error);
        })
        .finally(() => {
            // codice da eseguire a prescindere dall'esito:
            console.log(`eseguito con successo`)
        })
    
}
