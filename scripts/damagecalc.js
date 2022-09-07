let opData = []

let opInterval
let opDamage
let opDamageType

let enemyData = []

let enemyInterval
let enemyDamage

let enemy = {
    HP: 0,
    ATK: 0,
    Interval: 0,
    ASPD: 0,
    DEF: 0,
    RES: 0,
    dmgType: ""
}
let useEnemyStats = false
let useOpStats = false

const DmgType = {
    Phys: "Physical",
    Arts: "Arts",
    True: "True"
}

function updateOpValues() {
    updateEnemyData()
    calc()
}

function updateEnemyValues() {
    calc()
    updateEnemyData()
}

function calc() {
    let aspd = parseInt(document.getElementById("aspd").value)
    let base = parseFloat(document.getElementById("branchSelect").value)
    let modifier = parseFloat(document.getElementById("modifier").value)
    let atk = parseInt(document.getElementById("atk").value)
    let atkModifier = parseFloat(document.getElementById("atkModifier").value) / 100

    useEnemyStats = document.querySelector("#useEnemyStats").checked

    opDamageType = getOpDmgType()

    let numerator = 100 + aspd
    let denominator = base + modifier
    opInterval = 100 / (numerator / denominator)
    let totalAtk = (atk + (atk * atkModifier))
    let dpm
    if (useEnemyStats)
    {
        if (opDamageType === DmgType.Phys)
        {
            opDamage = totalAtk - enemy.DEF
            if (opDamage < totalAtk * 0.05)
            {
                opDamage = totalAtk * 0.05
            }
        }
        else if (opDamageType === DmgType.Arts) {
            opDamage = totalAtk * (1 - enemy.RES)
            if (opDamage < 0.05 * totalAtk)
            {
                opDamage = totalAtk * 0.05
            }
        }
        else if (opDamageType === DmgType.True || opDamageType === null)
        {
            opDamage = totalAtk
        }
        dpm = opDamage * (60 / opInterval)
    }
    else
    {
        opDamage = totalAtk
        dpm = totalAtk * (60 / opInterval);
    }
    let baseDPM = atk * (60 / base)
    let delta = ((dpm - baseDPM) / baseDPM) * 100

    if (isNaN(base)) base = 0
    if (isNaN(baseDPM)) baseDPM = 0
    if (isNaN(opInterval)) opInterval = 0
    if (isNaN(dpm)) dpm = 0
    if (isNaN(delta)) delta = 0

    document.getElementById("baseInterval").innerHTML = `${base.toFixed(2)}`
    document.getElementById("baseDPM").innerHTML = `${baseDPM.toFixed(2)}`
    document.getElementById("dpmChange").innerHTML = `${delta.toFixed(2)} %`
    document.getElementById("newInterval").innerHTML = `${opInterval.toFixed(2)}`
    document.getElementById("DPM").innerHTML = `${dpm.toFixed(2)}`
}

function getOpDmgType() {
    let d = document.querySelector("#opDmgType")
    let selected = d.querySelector('input[type="radio"]:checked')
    switch (selected.value) {
        case "artsDmg":
            return DmgType.Arts
        case "physDmg":
            return DmgType.Phys
        case "trueDmg":
            return DmgType.True
        default:
            return null
    }
}

function calculateDenominator(baseInterval, intervalModifier) {
    return baseInterval + intervalModifier
}

function resetBranchSelect(parent) {
    while (parent.children.length > 1) {
        parent.removeChild(parent.lastChild)
    }
}

function addBranchesOfSingleClass(operatorClass) {
    switch (operatorClass) {
        case "Caster":
            return Caster
        case "Defender":
            return Defender
        case "Guard":
            return Guard
        case "Medic":
            return Medic
        case "Sniper":
            return Sniper
        case "Specialist":
            return Specialist
        case "Supporter":
            return Supporter
        case "Vanguard":
            return Vanguard
        default:
            return {
                "Name": "Select a branch",
                "Value": "null"
            }
    }
}

function updateBranches() {
    let branchSelector = document.getElementById("branchSelect")
    resetBranchSelect(branchSelector)
    let opClass = document.getElementById("classSelect").value
    if (opClass !== "null") {
        let branches = addBranchesOfSingleClass(opClass)
        createBranchSelectOptions(branchSelector, branches)
    }
    else {
        let allBranches = []
        for (let i = 0; i < Branches.length; i++) {
            for (let j = 0; j < Branches[i].length; j++)
            {
                allBranches.push(Branches[i][j])
            }
        }
        allBranches.sort(sortBranchesAlphabetically)
        createBranchSelectOptions(branchSelector, allBranches)
    }
}

function createBranchSelectOption(branch) {
    let option = document.createElement('option')
    option.value = branch.Value
    option.innerHTML = branch.Name
    return option
}

function createBranchSelectOptions(selector, branches) {
    for (let i = 0; i < branches.length; i++) {
        selector.appendChild(createBranchSelectOption(branches[i]))
    }
}

function sortBranchesAlphabetically(a, b) {
    if (a.Name < b.Name) return -1
    if (a.Name > b.Name) return 1
    return 0
}

function generateOpData() {
    let damage = 0
    opData = []
    for (let i = 1; i < 60; i += opInterval) {
        damage += opDamage
        let temp = [i, damage]
        // let temp = {
        //     initial: i,
        //     final: i + opInterval,
        //     totalDamage: damage
        // }
        opData.push(temp)
    }
}

function updateEnemyData() {
    enemy.ATK = parseInt(document.getElementById("enemyAtk").value)
    enemy.Interval = parseFloat(document.getElementById("enemyAtkInterval").value)
    enemy.DEF = parseInt(document.getElementById("enemyDef").value)
    enemy.RES = parseInt(document.getElementById("enemyRes").value) / 100.0
    enemyDamage = (enemy.ATK) * 60

    let damage = 0
    enemyData = []
    for (let i = 0; i < 60; i += enemyInterval) {
        damage += enemyDamage
        let temp = {
            initial: i,
            final: i + enemyInterval,
            totalDamage: damage
        }
        enemyData.push(temp)
    }
}
