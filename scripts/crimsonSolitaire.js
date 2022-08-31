function selectCSSquadBonus() {
  let container = document.querySelector('#crimsonSolitaireSquadBonuses')
  let selectedBonuses = container.querySelectorAll('input[type="checkbox"]:checked')
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
  const supportBonus = Math.floor(Math.random() * 3) + 1
  const recruitmentSet = selectCSRecruitmentSet()
  document.getElementById("squadBonus").innerHTML = squadBonus
  document.getElementById("supportBonus").innerHTML = supportBonus.toString()
  document.getElementById("recruitmentSet").innerHTML = recruitmentSet
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
