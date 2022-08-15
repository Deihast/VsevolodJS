const films = [
    {name: "Once Upon a Time In Hollywood", genre: "comedy-drama", duration: 161, writtenBy: "Quentin Tarantino", ukrSubs: true, year: 1990},
    {name: "Riddick", genre: "fiction, action, thriller", duration: 119, writtenBy: "David Twohy", ukrSubs: false, year: 2010},
    {name: "The Guilty", genre: "thriller", duration: 90, writtenBy: "Nic Pizzolatto", ukrSubs: false, year: 1999},
]

function* filmGenerator (allFilms) {
  const choosenFilm = 'Riddick';
  let attempts = allFilms.length;
  let end = 'Sorry you don`t have attempts!'
  let movie;

  const randomFilm = (randFilm) => {
    const i = Math.floor(Math.random()*allFilms.length);

    return randFilm[i].name;
  }

  while (attempts) {
    movie = randomFilm(allFilms);
    console.log(movie)
    
    if (choosenFilm !== movie) {
        yield movie;
        attempts--;
    } else {
        end = `Your film is ${movie}, have a pleasant viewing!`;
        break;
    }
  }

  return end;
}

const x = filmGenerator(films);
console.log(x.next(films));
console.log(x.next(films));
console.log(x.next(films));
console.log(x.next(films));