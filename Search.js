$(document).ready(() =>{
    $('#searchForm').on('submit', (e) => {
     e.preventDefault();
     let serchText = ($('#searchText').val())
     getMovies(serchText);
    })
 });
 
 function getMovies(searchText){
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=a9b6b0bd993c436f151fe14a58378827&language=en-US&query=" + searchText)
     .then(function(response){
     let movies =response.data.results;
     console.log(response);
     let output = '';
     $.each(movies, (index,movie) => {
         output+=` 
         <div class="col-md-3">
         <div class="well text-center">
         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
         <h5>${movie.title}</h5>
         <a onclick="movieSelected('${movie.id}')" class="btn btn-info" href="#">Movie Details</a>
         </div>
         </div>
         `;
     }); 
     $('#movies').html(output);
     })
     .catch((err) => {
        console.log(err);
     });
 }