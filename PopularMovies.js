function getMovies(){
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a9b6b0bd993c436f151fe14a58378827&language=en-US&page=1")
     .then(function(response){
     let movies =response.data.results;
     console.log(response);
     let output = '';
     $.each(movies, (index,movie) => {
         output+=` 
                <a href="#" class="movie-item">
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
     $('#upcoming').html(output);
     })
     .catch((err) => {
        console.log(err);
     });
 }
 getMovies();


//  https://api.themoviedb.org/3/movie/popular?api_key=a9b6b0bd993c436f151fe14a58378827&language=en-US&page=1
// https://api.themoviedb.org/3/movie/upcoming?api_key=a9b6b0bd993c436f151fe14a58378827&language=en-US&page=1