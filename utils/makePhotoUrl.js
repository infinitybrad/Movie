export default (path, size = "w500") =>
    `http://image.tmdb.org/t/p/${size}${path}`;