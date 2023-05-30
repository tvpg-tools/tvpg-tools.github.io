function selectCSSquadBonus() {
  let container = document.querySelector('#crimsonSolitaireSquadBonuses')
  let selectedBonuses = container.querySelectorAll('input[type="checkbox"]:checked')
  if (selectedBonuses.length === 0) {
    alert("Please select at least one squad bonus")
    return null
  }
  let index = Math.floor(Math.random() * selectedBonuses.length)
  return selectedBonuses[index].name
}

function selectCSRecruitmentSet() {
  const set = [
    "First Move Advantage",
    "Slow and Steady Wins the Race",
    "Overcoming Your Weaknesses",
    "As Your Heart Desires"
  ]
  let index = Math.floor(Math.random() * set.length)
  return set[index]
}

function randomizeCrimsonSolitaire() {
  const squadBonus = selectCSSquadBonus()
  if (squadBonus == null) {
    return
  }
  const supportBonus = Math.floor(Math.random() * 3) + 1
  const recruitmentSet = selectCSRecruitmentSet()
  document.getElementById("csSquadBonus").innerHTML = squadBonus
  document.getElementById("csSupportBonus").innerHTML = supportBonus.toString()
  document.getElementById("csRecruitmentSet").innerHTML = recruitmentSet
}

function calculateASPDBonus()
{
  // Get selected items
  let toy = document.querySelector("#toy").checked
  let commandments = document.querySelector("#commandments").checked
  let chalice = document.querySelector("#chalice").checked
  let ingots = parseInt(document.getElementById("ingots").value)
  let aspdBonus = 0

  if (toy === true) {
    aspdBonus += Math.floor(ingots / 5) * 3
  }
  if (commandments === true) {
    aspdBonus += Math.floor(ingots / 5) * 5
  }
  if (chalice === true)   {
    aspdBonus += Math.floor(ingots / 5) * 7
  }

  document.getElementById("bonus").innerHTML = `Bonus: ${aspdBonus}`
}

function deselectAllSquads() {
  let container = document.querySelector('#crimsonSolitaireSquadBonuses')
  let selectedBonuses = container.querySelectorAll('input[type="checkbox"]:checked')
  for (let i = 0; i < selectedBonuses.length; i++) {
    selectedBonuses[i].checked = false
  }
}

function selectAllSquads() {
  let container = document.querySelector('#crimsonSolitaireSquadBonuses')
  let bonuses = container.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < bonuses.length; i++) {
    bonuses[i].checked = true
  }
  
}