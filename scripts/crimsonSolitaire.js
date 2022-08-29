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
  alert(`Squad Bonus: ${squadBonus}`
        +`\nSupport Bonus: ${supportBonus}`
        +`\nRecruitment Set: ${recruitmentSet}`)
}
