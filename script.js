/* Generate pokemon containers and buttons */

const randomContainer = document.createElement("div");
document.body.append(randomContainer);

const ranButton = document.createElement("BUTTON");
ranButton.textContent = "Random Encounter";
ranButton.addEventListener("click", () => {
    getPkmn(randomContainer, "front");
});
document.body.append(ranButton);

const yourPkmnContainer = document.createElement("div");
document.body.append(yourPkmnContainer);

const pokeButton = document.createElement("BUTTON");
pokeButton.textContent = "Your Pokemon";
pokeButton.addEventListener("click", () => {
    getPkmn(yourPkmnContainer, "back");
});
document.body.append(pokeButton);

/* --- Generate footer with date from Temporal --- */
const footElement = document.querySelector("footer");
const now = Temporal.Now.zonedDateTimeISO();
const formattedDateTime = now.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
});

footElement.textContent = `™ 2026 Game by Javier Jaramillo | ${formattedDateTime}`;


/* API for acquiring  Pokemon data */
async function getPkmn(targetContainer, viewDirection) {

    /* --- Randomly chose a pokemon between 1 and 151 --- */
    try {
        const randomId = Math.floor(Math.random() * 151) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        /* --- clear container --- */
        targetContainer.innerHTML = '';
      
       /* Store data and store audio file and play it. */
        const data = await response.json();
        const randCryUrl = data.cries.latest;

        const audio = new Audio(randCryUrl);
        await audio.play();

        const textInfo = document.createElement("span");
        /* Store name and format it */
        let nameElement = document.createElement('p');
        nameElement.textContent = data.name;
        nameElement.style.textTransform = 'capitalize';
        nameElement.style.display = 'inline';
        
        /* Generate random level */
        const lvl = Math.floor(Math.random() * 100) + 1;

        textInfo.append(`Level ${lvl} `, nameElement);
        targetContainer.append(textInfo);
        
        /* Decide if pokemon will be shiny */
        const shinyVariable = Math.floor(Math.random() * 2);
        let sprite;

        if (shinyVariable === 0) {
            sprite = data.sprites[`${viewDirection}_default`];
        } else {
            sprite = data.sprites[`${viewDirection}_shiny`];
        }
        
        /* Append Pokemon image */
        const img = document.createElement('img');
        img.src = sprite;
        img.style.display = 'block';
        targetContainer.appendChild(img);
        
        /* If it's the user's pokemon randomly generate berry */
        if (viewDirection === "back") {
            const berryName = await fetchDailyBerry();

            if (berryName) {
                const berryText = document.createElement("p");
                berryText.textContent = `Held item: ${berryName.toUpperCase()} BERRY`;
                berryText.style.fontSize = "12px";
                berryText.style.color = "#555";
                textInfo.appendChild(berryText);
            }
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

/* API call to generate berry */
async function fetchDailyBerry() {
    try {
        const berryId = Math.floor(Math.random() * 64) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/berry/${berryId}`);
        if (!response.ok) throw new Error("Berry API failed");

        const data = await response.json();
        const berryName = data.name;

        alert(`Your Pokemon is holding a ${berryName.toUpperCase()} BERRY!`);

        return berryName;
    } catch (error) {
        console.error("Berry API Error:", error);
    }
}