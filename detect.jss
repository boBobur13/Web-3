function detectAI() {
    const text = document.getElementById("inputText").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    const aiPhrases = [
        "—",
        "delve into",
        "underscore",
        "pivotal",
        "realm",
        "harness",
        "illuminate"
    ];
    let found = [];
    for (let i = 0; i < aiPhrases.length; i++) {
        if (text.includes(aiPhrases[i])) {
            found.push(aiPhrases[i]);
        }
    }
    if (found.length > 0) {
        resultDiv.innerHTML = "Find Ai info: <br>" + found.join(", ");
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = "No use Ai.";
        resultDiv.style.color = "green";
    }
}
