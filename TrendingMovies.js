function getMovies(){
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a9b6b0bd993c436f151fe14a58378827")
     .then(function(response){
     let movies =response.data.results;
     console.log(response);
     let output = '';
     $.each(movies, (index,movie) => {
         output+=` 
                <a onclick="movieSelected('${movie.id}')" href="#" class="movie-item">
                        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="">
                        <div class="movie-item-content">
                            <div class="movie-item-title">
                            ${movie.title}
                            </div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>${movie.vote_average.toFixed(1)}</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span>${movie.release_date}</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>16+</span>
                                </div>
                            </div>
                        </div>
                    </a>
         `;
     }); 
     $('#trending').html(output);
     })
     .catch((err) => {
        console.log(err);
     });
 }
 getMovies();
 function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'Movies_Details.html';
    return false;
}
function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
    axios.get("https://api.themoviedb.org/3/movie/" + movieId +"?api_key=f978469236288b7c33c1b9f16b70da07")
    .then(function(response){
        // console.log(response);
        let movie = response.data;

        let output =`
        <div class = 'row'>
         <div class="col-md-4">
         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
         </div>
         <div class="col-md-8">
         <h3>${movie.title}<h3>
         <ul class="list-group">
         <li class="list-group-item"><strong>Genre;</strong>${movie.genres[0].name}, ${movie.genres[1].name}</li>
         <li class="list-group-item"><strong>Released;</strong>${movie.release_date}</li>
         <li class="list-group-item"><strong>Rated;</strong>${movie.vote_average.toFixed(1)}</li>
         <li class="list-group-item"><strong>Runtime;</strong>${movie.runtime}</li>
         <li class="list-group-item"><strong>Production Companies:</strong> ${movie.production_companies[0].name} min.</li>
         </ul>
         </div>
        </div>
        <div class="row">
        <div class="well">
          <h3>Plot</h3>
          ${movie.overview}
          <hr>

          <a href="index.html" class="btn btn-success">Go Back To Search</a>
        </div>
      </div>
        `;

        $('#TrendingMovies_Details').html(output);
   
    })
    .catch((err) => {
       console.log(err);
    });
}
