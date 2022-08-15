const films = [
    {name: "Once Upon a Time In Hollywood", genre: "comedy-drama", duration: 161, writtenBy: "Quentin Tarantino", ukrSubs: true},
    {name: "Riddick", genre: "fiction, action, thriller", duration: 119, writtenBy: "David Twohy", ukrSubs: false},
    {name: "The Guilty", genre: "thriller", duration: 90, writtenBy: "Nic Pizzolatto", ukrSubs: false},
    {name: "Harry Potter and the Philosopher`s Stone", genre: "fantasy", duration: 152, writtenBy: "Stephen Kloves", ukrSubs: true},
    {name: "The Hobbit An Unexpected Journey", genre: "fantasy", duration: 169, writtenBy: "Peter Jackson", ukrSubs: true},
    {name: "", genre: "", duration: "", writtenBy: "", ukrSubs: ""},
]

function createPreview (film) {
    if (!film) return console.log("Invalid data(1)");
    if (films.some(item => item.name === film)) film = films.find(item => item.name === film);

    return console.log(`
        =========== Film preview ===========
        Name: ${film.name || "This is the film"}
        Genre: ${film.genre || "Some genre"}
        Written by ${film.writtenBy || "Some author"}
        Ukrainian subtitles: ${film.ukrSubs ?? false}
        ====================================
    `);
}

createPreview(films[0]);
createPreview("someFilmDataIdk");
createPreview("Riddick");
createPreview();