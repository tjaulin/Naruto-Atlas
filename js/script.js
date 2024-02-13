const baseurl = 'https://narutodb.xyz/api'

$('.characters-button').on('click', function(e) {
    e.preventDefault();
    launchLoader();
    getAllCharacters();
    $('.active').removeClass('active');
    $('.nav-link.characters-button').addClass('active');
});

async function getAllCharacters() {
    const charactersData = await fetch(`${baseurl}/character?limit=10000`)
    const charactersJson = await charactersData.json();
    const characters = charactersJson.characters;
    console.log(characters);
    launchLoader(true);

    $('.main').addClass('d-flex justify-content-center align-items-center flex-wrap gap-3 mx-5');

    contentDivHtml = ``;
    for(i = 0; i < characters.length; i++) {
        let imageSrc = characters[i].images[0];
        contentDivHtml += `
            <div class="card">
                <div id="${characters[i].id}" class="card-body">
                    <h5 class="card-title">${characters[i].name}</h5>
                </div>
                <img class="card-img-bottom" src="${imageSrc}" alt="Image of ${characters[i].name}" onerror="this.onerror=null;this.src='../img/placeholder.jpeg';" />
            </div>
        `;
    }
    $('.main').html(contentDivHtml);
}

function launchLoader(stop = false) {
    if(stop) {
        $('.loader-container').remove();
        return;
    }
    $('.title').text('Characters');
    $('.main').html('');
    $("body").append(`
        <div class="loader-container position-absolute top-50 start-50 translate-middle">
            <img src="./img/loader/naruto-loader.gif" alt="naruto loader">
            <img src="./img/loader/sasuke-loader.gif" alt="sasuke loader">
            <img src="./img/loader/sakura-loader.gif" alt="sakura loader">
            <img src="./img/loader/kakashi-loader.gif" alt="kakashi loader">
        </div>
    `);
}

$('.home-button').on('click', function(e) {
    window.location.reload();
});




//TODO : Pour plus tard - Fonction de recherche (acnh)
// Fonction qui permet le fonctionnement de la barre de recherche d'un villageois. Je compare le nom anglais et français a chaque fois que je tape une touche, si cela ne correspond pas je lui attribue un display none pour le désafficher. Sinon je lui met/remet un display inline-block pour le remettre sur l'écran.
// function rechercherVil() {
//     let userValue = document.getElementById("maRechercheVillageois").value;
//     userValue = userValue.toLowerCase();
//     let namesVillager = document.querySelectorAll(".nameVil");
//     let frenchNamesVillager = document.querySelectorAll(".frenchNameVil");
//     let cardsVillager = document.querySelectorAll(".card-villager");

//     for (i = 0; i < namesVillager.length; i++) {
//         if (!namesVillager[i].innerHTML.toLowerCase().includes(userValue) 
//             && !frenchNamesVillager[i].innerHTML.toLowerCase().includes(userValue)) {
//             cardsVillager[i].style.display = "none";
//         }
//         else {
//             cardsVillager[i].style.display = "inline-block";
//         }
//     }
// }