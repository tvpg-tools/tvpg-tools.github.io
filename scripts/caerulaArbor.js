function selectCASquadBonus() {
    let container = document.querySelector('#caerulaArborSquadBonuses')
    let selectedBonuses = container.querySelectorAll('input[type="checkbox"]:checked')
    if (selectedBonuses.length === 0) {
        alert("Please select at least one squad bonus")
        return null
    }
    let index = Math.floor(Math.random() * selectedBonuses.length)
    return selectedBonuses[index].name
}

function selectCARecruitmentSet() {
    const set = [
        "First Move Advantage",
        "Slow and Steady Wins the Race",
        "Overcoming Your Weaknesses",
        "As Your Heart Desires"
    ]
    let index = Math.floor(Math.random() * set.length)
    return set[index]
}

function randomizeCaerulaArbor() {
    const squadBonus = selectCASquadBonus()
    if (squadBonus == null) {
        return
    }
    const supportBonus = Math.floor(Math.random() * 3) + 1
    const recruitmentSet = selectCSRecruitmentSet()
    document.getElementById("caSquadBonus").innerHTML = squadBonus
    document.getElementById("caSupportBonus").innerHTML = supportBonus.toString()
    document.getElementById("caRecruitmentSet").innerHTML = recruitmentSet
}

function deselectAllSquads() {
    let container = document.querySelector('#caerulaArborSquadBonuses')
    let selectedBonuses = container.querySelectorAll('input[type="checkbox"]:checked')
    for (let i = 0; i < selectedBonuses.length; i++) {
        selectedBonuses[i].checked = false
    }
}

function selectAllSquads() {
    let container = document.querySelector('#caerulaArborSquadBonuses')
    let bonuses = container.querySelectorAll('input[type="checkbox"]')
    for (let i = 0; i < bonuses.length; i++) {
        bonuses[i].checked = true
    }

}