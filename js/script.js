const baseurl = 'https://narutodb.xyz/api'
const contentDiv = document.querySelector('.content');

async function getAllCharacters() {
    const charactersData = await fetch(`${baseurl}/character?limit=10000`)
    const charactersJson = await charactersData.json();
    const characters = charactersJson.characters;
    console.log(characters);
    contentDivHtml = ``;
    for(i = 0; i < characters.length; i++) {
        if(characters[i].name == "Naruto Uzumaki") {
            console.log(characters[i]);
        }
        contentDivHtml += `
            <div class="box">
                <p>${characters[i].name}</p>
                <img src="${characters[i].images[0]}" alt="Image of ${characters[i].name}"/>
            </div>
        `;
    }
    contentDiv.innerHTML = contentDivHtml;
}

getAllCharacters();