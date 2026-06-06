// Kjør beregning når brukeren trykker Enter
document.getElementById("hoursInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculatePercentage();
    }
});

function calculatePercentage() {
    const hours = parseFloat(document.getElementById("hoursInput").value);

    if (isNaN(hours) || hours <= 0) {
        document.getElementById("result").innerText = "Skriv inn et gyldig antall timer.";
        return;
    }

    const year336 = 1747.2; // 33,6 t/uke
    const year355 = 1846;   // 35,5 t/uke (fra HTA-tabellen)
    const year375 = 1950;   // 37,5 t/uke

    const percent336 = (hours / year336) * 100;
    const percent355 = (hours / year355) * 100;
    const percent375 = (hours / year375) * 100;

    document.getElementById("result").innerHTML = `
    <div class="resultBox">
        <strong>33,6 t/uke (årstimer 1747,2):</strong><br>
        <span class="bigPercent">${percent336.toFixed(2)} %</span>
    </div>

    <div class="resultBox">
        <strong>35,5 t/uke (årstimer 1846):</strong><br>
        <span class="bigPercent">${percent355.toFixed(2)} %</span>
    </div>

    <div class="resultBox">
        <strong>37,5 t/uke (årstimer 1950):</strong><br>
        <span class="bigPercent">${percent375.toFixed(2)} %</span>
    </div>
`;
}