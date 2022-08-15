const films = [
    {name: "Once Upon a Time In Hollywood", genre: "comedy-drama", duration: 161, writtenBy: "Quentin Tarantino", ukrSubs: true, year: 1990},
    {name: "Riddick", genre: "fiction, action, thriller", duration: 119, writtenBy: "David Twohy", ukrSubs: false, year: 2010},
    {name: "The Guilty", genre: "thriller", duration: 90, writtenBy: "Nic Pizzolatto", ukrSubs: false, year: 1999},
    {name: "Harry Potter and the Philosopher`s Stone", genre: "fantasy", duration: 152, writtenBy: "Stephen Kloves", ukrSubs: true, year: 2009},
    {name: "The Hobbit An Unexpected Journey", genre: "fantasy", duration: 169, writtenBy: "Peter Jackson", ukrSubs: true, year: 2000},
    {name: "Some film", genre: "some genre", duration: "some duration", writtenBy: "Author", ukrSubs: true, year: 2013},
]

let i = films.length - 1;
const filteredFilms = [];

function getFilms (start, end, genre) {
    const startYear = start;
    const endYear = end;
    const filter = genre;
    
    if (i < 0) {
        return console.log(filteredFilms);
    } else if (films[i].genre !== filter) {
        i = i - 1;
        return getFilms(startYear, endYear, filter);
    } else if (films[i].year >= startYear && films[i].year <= endYear ) {
        filteredFilms.push(films[i]);
        i = i - 1;
        return getFilms(startYear, endYear, filter);
    } else {
        i = i - 1;
        return getFilms(startYear, endYear, filter);
    }
}

getFilms(1900, 2008, "fantasy");