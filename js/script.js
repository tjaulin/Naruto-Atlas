const baseurl = 'https://narutodb.xyz/api'

$('.characters-button').on('click', function(e) {
    e.preventDefault();
    launchLoader();
    getAllCharacters();
    $('.active').removeClass('active');
    $('.nav-link.characters-button').addClass('active')
});

async function getAllCharacters() {
    const charactersData = await fetch(`${baseurl}/character?limit=10000`)
    const charactersJson = await charactersData.json();
    const characters = charactersJson.characters;
    launchLoader(true);

    $('.main').addClass('d-flex justify-content-center align-items-center flex-wrap gap-3');

    contentDivHtml = ``;
    for(i = 0; i < characters.length; i++) {
        if(characters[i].name == "Naruto Uzumaki") {
            console.log(characters[i]);
        }
        contentDivHtml += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${characters[i].images[0]}" alt="Image of ${characters[i].name}" width="250px" />
                <div class="card-body">
                    <h5 class="card-title">${characters[i].name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
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