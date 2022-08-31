const Caster = [
    {
        "Name": "Blast Caster",
        "Value": 2.9
    },
    {
        "Name": "Chain Caster",
        "Value": 2.3
    },
    {
        "Name": "Core Caster",
        "Value": 1.6
    },
    {
        "Name": "Mech-Accord",
        "Value": 1.3
    },
    {
        "Name": "Mystic Caster",
        "Value": 3
    },
    {
        "Name": "Phalanx Caster",
        "Value": 2
    },
    {
        "Name": "Splash Caster",
        "Value": 2.9
    }
]

const Defender = [
    {
        "Name": "Arts Protector",
        "Value": 1.6
    },
    {
        "Name": "Duelist",
        "Value": 1.6
    },
    {
        "Name": "Fortress",
        "Value": 2.8
    },
    {
        "Name": "Guardian",
        "Value": 1.2
    },
    {
        "Name": "Juggernaut",
        "Value": 1.6
    },
    {
        "Name": "Protector",
        "Value": 1.2
    },
    {
        "Name": "Protector (Nian)",
        "Value": 1.5
    }

]

const Guard = [
    {
        "Name": "Arts Fighter",
        "Value": 1.25
    },
    {
        "Name": "Brawler",
        "Value": 0.78
    },
    {
        "Name": "Centurion",
        "Value": 1.2
    },
    {
        "Name": "Dreadnought",
        "Value": 1.5
    },
    {
        "Name": "Instructor",
        "Value": 1.05
    },
    {
        "Name": "Liberator Guard",
        "Value": 1.2
    },
    {
        "Name": "Lord",
        "Value": 1.3
    },
    {
        "Name": "Musha",
        "Value": 1.2
    },
    {
        "Name": "Reaper Guard",
        "Value": 1.3
    },
    {
        "Name": "Swordmaster",
        "Value": 1.3
    }
]

const Medic = [
    {
        "Name": "Medic",
        "Value": 2.85
    },
    {
        "Name": "Multi-target Medic",
        "Value": 2.85
    },
    {
        "Name": "Therapist",
        "Value": 2.85
    },
    {
        "Name": "Wandering Medic",
        "Value": 2.85
    }
]

const Sniper = [
    {
        "Name": "Artilleryman",
        "Value": 2.8
    },
    {
        "Name": "Besieger",
        "Value": 2.4
    },
    {
        "Name": "Deadeye",
        "Value": 2.7
    },
    {
        "Name": "Flinger",
        "Value": 2.1
    },
    {
        "Name": "Heavyshooter",
        "Value": 1.6
    },
    {
        "Name": "Marksman",
        "Value": 1
    },
    {
        "Name": "Spreadshooter",
        "Value": 2.3
    }
]

const Specialist = [
    {
        "Name": "Ambusher",
        "Value": 3.5
    },
    {
        "Name": "Dollkeeper",
        "Value": 1.2
    },
    {
        "Name": "Executor",
        "Value": 0.93
    },
    {
        "Name": "Geek",
        "Value": 1.3
    },
    {
        "Name": "Hookmaster",
        "Value": 1.8
    },
    {
        "Name": "Merchant",
        "Value": 1
    },
    {
        "Name": "Push Stroker",
        "Value": 1.2
    },
    {
        "Name": "Trapmaster",
        "Value": 0.85
    }
]

const Supporter = [
    {
        "Name": "Abjurer",
        "Value": 1.6
    },
    {
        "Name": "Artificer",
        "Value": 1.5
    },
    {
        "Name": "Bard",
        "Value": 1
    },
    {
        "Name": "Decel Binder",
        "Value": 1.9
    },
    {
        "Name": "Hexer",
        "Value": 1.6
    },
    {
        "Name": "Summoner",
        "Value": 1.6
    }
]

const Vanguard = [
    {
        "Name": "Agent",
        "Value": 1
    },
    {
        "Name": "Charger",
        "Value": 1
    },
    {
        "Name": "Pioneer",
        "Value": 1.05
    },
    {
        "Name": "Standard Bearer",
        "Value": 1.3
    },
    {
        "Name": "Tactician",
        "Value": 1
    }
]

const Branches = [
    Caster, Defender, Guard, Medic, Sniper, Specialist, Supporter, Vanguard
]

function calc() {
    let aspd = parseInt(document.getElementById("aspd").value)
    let base = parseFloat(document.getElementById("branchSelect").value)
    let modifier = parseFloat(document.getElementById("modifier").value)
    let atk = parseInt(document.getElementById("atk").value)
    let atkModifier = parseFloat(document.getElementById("atkModifier").value) / 100

    let numerator = 100 + aspd
    let denominator = base + modifier
    let interval = 100 / (numerator / denominator)
    let baseDPM = atk * (60 / base)
    let dpm = (atk + (atk * atkModifier)) * (60 / interval);
    let delta = ((dpm - baseDPM) / baseDPM) * 100

    if (isNaN(base)) base = 0
    if (isNaN(baseDPM)) baseDPM = 0
    if (isNaN(interval)) interval = 0
    if (isNaN(dpm)) dpm = 0
    if (isNaN(delta)) delta = 0

    document.getElementById("baseInterval").innerHTML = `${base.toFixed(2)}`
    document.getElementById("baseDPM").innerHTML = `${baseDPM.toFixed(2)}`
    document.getElementById("dpmChange").innerHTML = `${delta.toFixed(2)} %`
    document.getElementById("newInterval").innerHTML = `${interval.toFixed(2)}`
    document.getElementById("DPM").innerHTML = `${dpm.toFixed(2)}`
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
                "Name": "Select an branch",
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
