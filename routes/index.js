var movieJSON = require('../movies.json');

//Home
exports.home = function (req, res) {
    var movies = movieJSON.movies;

    res.render('home', {
        title: "Star Wars Movies",
        movies: movies
    });
};

//movie_single
exports.movie_single = function (req, res) {
    var episode_number = req.params.episode_number;
    var movies = movieJSON.movies;

    if (episode_number >= 1 && episode_number <= 6) {
        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters;
        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters
        });
    } else {
        res.render('notFound', {
            movies:movies,
            title: "This not page you are looking for"
        });
    }
};

//Not founde
exports.notFound = function (req, res) {
    res.send("<h2>This Not valid page</h2>");
    res.render('notFound', {
        movies:movies,
        title: "This not page you are looking for"
    });
};