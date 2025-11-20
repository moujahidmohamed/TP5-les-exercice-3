const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien de continents y a-t-il sur Terre ?", "7"],
    ["Quel est le plus grand mammifère du monde ?", "Baleine bleue"],
    ["En quelle année a été fondée l'ONU ?", "1945"],
    ["Quel est le symbole chimique de l'or ?", "Au"]
];
function lancerQuiz() {
    let score = 0;
    alert("Bienvenue au Quiz");
    for (let i = 0; i < QUESTIONS.length; i++) {
        let question = QUESTIONS[i][0];
        let reponseCorrecte = QUESTIONS[i][1];
        
        let reponseUtilisateur = prompt(`Question ${i + 1}/${QUESTIONS.length}:\n${question}`);
        
        if (reponseUtilisateur !== null) {
            
            if (reponseUtilisateur.trim().toLowerCase() === reponseCorrecte.trim().toLowerCase()) {
                alert(" Réponse juste !");
                score++;
            } else {
                alert(` Réponse fausse !\nLa bonne réponse était : ${reponseCorrecte}`);
            }
        } else {
            alert(" Vous avez annulé. Question passée.");
        }
    }
    
    let messageResultat = ` RÉSULTATS DU QUIZ\n`;
    messageResultat += `Vous avez répondu correctement à ${score} questions sur ${QUESTIONS.length}`;
    
    alert(messageResultat);
    console.log(messageResultat);
}

