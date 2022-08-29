function calc() {
    var aspd = parseInt(document.getElementById("aspd").value)
    var base = parseFloat(document.getElementById("base").value)
    var modifier = parseFloat(document.getElementById("modifier").value)
    var atk = parseInt(document.getElementById("atk").value)
    var numerator = 100 + aspd
    var denominator = base + modifier
    var interval = 100 / (numerator / denominator)
    var dps = atk * (1 / interval)
    var dpm = atk * (60 / interval)
    alert(`Attack Interval = ${interval}`
          +`\nDPS = ${dps}`
          +`\nDPM = ${dpm}`)
}
