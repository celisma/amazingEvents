import data from './data.js';

let eventContainer = document.getElementById("cards-row");

for(let event of data.events){
    let card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `

        <div class="card h-100">
            <img src="${event.image}" class="card-img-top" alt="..."></img>
            <div class="card-body text-center">
                <h3 class="card-title">${event.name}</h3>
                <p class="card-text">${event.description}</p>
                <div class="card_bottom">
                    <h5>Price: $ ${event.price}</h5>
                    <button onclick="window.location.href='./details.html';" class="card_bottom_button">
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
    `;

    eventContainer.appendChild(card); 
}