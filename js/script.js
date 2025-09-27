import { mlbTeamExperiences } from "../data/mlb.js";
console.log(mlbTeamExperiences);

const mlbCards = document.querySelector("#mlbTeamExperiences");

mlbTeamExperiences.forEach(experience => {
    const card = document.createElement("div")
    card.className = "card1" 

    const img = document.createElement("img")
    img.src = experience.image_url 

    const title = document.createElement("h2")
    title.innerText = experience.team 

    const length = document.createElement("div")
    length.innerText = experience.experience_length 
    length.className = "myLength"

    const desc = document.createElement("p")
    desc.innerText = experience.description 
    desc.className = "myDesc"

    const cost = document.createElement("div")
    cost.innerHTML = `<strong>Cost:</strong> ${experience.cost}`
    cost.className = "myCost"

    const buttons = document.createElement("div")
    buttons.innerHTML = '<a href="#" class="guide">Stadium Guide</a> <a href="#" class="buy">Buy Tickets</a>'
    buttons.className = "myButtons"

    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(length)
    card.appendChild(desc)
    card.appendChild(cost)
    card.appendChild(buttons)

    mlbCards.appendChild(card)
})