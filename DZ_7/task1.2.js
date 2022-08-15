const createPreview = (data) => {
    console.log({
        filmName: data.name || "This is film",
        filmGenre: data.genre || "Some genre",
        filmDuration: data.duration || "Whatever minutes",
        filmScriptAuthor: data.writtenBy || "Famous author",
        filmUkrSubs: data.ukrSubs ?? false
    });
}

createPreview({
    name: "The Hobbit An Unexpected Journey",
    genre: "fantasy", 
    duration: 169, 
    writtenBy: "Peter Jackson", 
    ukrSubs: true
});

createPreview({
    name: "",
    genre: "", 
    duration: "", 
    writtenBy: "", 
    ukrSubs: undefined
});