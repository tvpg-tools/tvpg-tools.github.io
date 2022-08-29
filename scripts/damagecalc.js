function calc() {
    var aspd = parseInt(document.getElementById("aspd").value)
    var base = parseFloat(document.getElementById("base").value)
    var modifier = parseFloat(document.getElementById("modifier").value)
    var atk = parseInt(document.getElementById("atk").value)
    var numerator = 100 + aspd
    var denominator = base + modifier
    var interval = 100 / (numerator / denominator)
    var baseDPM = atk * (60 / base)
    var dps = atk * (1 / interval)
    var dpm = atk * (60 / interval)
    let delta = ((dpm - baseDPM) / baseDPM) * 100
    document.getElementById("baseDPM").innerHTML = `${baseDPM.toFixed(2)}`
    document.getElementById("dpmChange").innerHTML = `${delta.toFixed(2)} %`
    document.getElementById("DPM").innerHTML = `${dpm.toFixed(2)}`

}
