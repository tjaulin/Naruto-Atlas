// Tout les scripts qui concerne la home page sont ici
const homeComponent = `
<div class="presentation d-flex align-items-center gap-5 mx-5 position-relative">
<h2 class="position-absolute top-0 start-50 translate-middle">What is Naruto Atlas ?</h2>
<img class="position-absolute top-0 end-0" src="./img/weapons/shuriken.png" alt="shuriken" width="65">
<img class="position-absolute top-0 start-0" src="./img/weapons/shuriken.png" alt="shuriken" width="65">
<img class="position-absolute bottom-0 start-0" src="./img/weapons/shuriken.png" alt="shuriken" width="65">
<img class="position-absolute bottom-0 end-0" src="./img/weapons/shuriken.png" alt="shuriken" width="65">
<img src="./img/all-naruto-characters.jpeg" alt="All naruto characters" width="250">
<div class="description">
    <p>
        Naruto Atlas is your ultimate guide to the vast and captivating world of Naruto. Whether you're a long-time fan of the series or just beginning your journey into the ninja-filled universe, our platform is here to provide you with comprehensive information, engaging content, and exciting features.
        Explore the rich history and lore of Naruto through our extensive database, which includes detailed profiles of characters, villages, clans, jutsu techniques, and much more. Dive deep into the captivating narratives, intricate relationships, and epic battles that have made Naruto a beloved franchise worldwide.<br>
        With Naruto Atlas, you can:
    </p>
    <ul>
        <li>Discover in-depth character profiles, complete with biographies, abilities, and images.</li>
        <li>Explore detailed information about villages, clans, and other key aspects of the Naruto universe.</li>
        <li>Learn about various jutsu techniques, their origins, and how they are used in combat.</li>
        <li>Stay up-to-date with the latest news, updates, and announcements from the world of Naruto.</li>
    </ul>
    <p>
        Whether you're researching your favorite characters, brushing up on your Naruto knowledge, or simply immersing yourself in the fantastical world of ninjas and shinobi, Naruto Atlas is your ultimate companion.
        Join us on this epic journey through the ninja world, and let Naruto Atlas be your guide every step of the way.
        Start exploring now and unleash the power of your inner ninja!
    </p>
</div>
</div>

<div id="separator" class="d-flex align-items-center m-5">
<img class="flip-horizontal me-2" src="./img/weapons/kusanagi.png" alt="Kusanagi sword (Orochimaru sword)" width="100">
<div id="separator-text" class="separator d-flex justify-content-center align-items-center w-100">Explore Naruto's World</div>
<img class="ms-2" src="./img/weapons/kusanagi.png" alt="Kusanagi sword (Orochimaru sword)" width="100">
</div>

<div class="buttons d-flex justify-content-center align-items-center mt-5 gap-3">
<div class="button characters-button">Characters</div>
<!-- <div class="button clans-button">Clans</div> -->
</div>
`

const bgColorHex = chroma($('body').css('background-color')).hex();

console.log(chroma(bgColorHex).darken().hex())

$('.presentation').css('background-color', chroma(bgColorHex).darken(.3));