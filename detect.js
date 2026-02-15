function detectAI() {
    const text = document.getElementById("inputText").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    const aiPhrases = ["—", "delve into", "underscore", "pivotal", "realm", "harness", "illuminate"].map(p => p.toLowerCase());

    const found = aiPhrases.filter(phrase => text.includes(phrase));

    if (found.length) {
        resultDiv.innerHTML = "Found AI phrases:<ul>" + found.map(f => `<li>${f}</li>`).join('') + "</ul>";
        resultDiv.style.color = "red";
    } else {
        resultDiv.textContent = "No AI phrases found.";
        resultDiv.style.color = "green";
    }
}
