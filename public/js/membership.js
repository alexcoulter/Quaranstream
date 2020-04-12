$(document).ready(function() {
  $(".carousel").carousel({
    dist: 0,
    shift: 0,
    padding: 20
  });
  var dataObj = JSON.parse(localStorage.getItem("dataObj"));
  // console.log(dataObj);
  // console.log(dataObja.watch1);
  var gameGenre1 = localStorage.getItem("gameGenre1");
  var gameGenre2 = localStorage.getItem("gameGenre2");
  var gameGenre3 = localStorage.getItem("gameGenre3");
  var platform = localStorage.getItem("platform");
  console.log(platform);

  getPopularArtists(dataObj.listen1, function(result) {
    const musicDataAll = result;
    const musicData = musicDataAll.slice(0, 5);
    console.log(musicData);
  });
  getPopularGames(gameGenre1, platform, function(result) {
    const gameData = result;
    console.log(gameData);
  });
  getPopularVideos(dataObj.watch1, "movie", function(result) {
    const movieData = result;
    console.log(movieData);
  });
  getPopularVideos(dataObj.watch1, "show", function(result) {
    const showData = result;
    console.log(showData);
  });
});
