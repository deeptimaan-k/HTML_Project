function getMovies(){
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a9b6b0bd993c436f151fe14a58378827")
     .then(function(response){
     let movies =response.data.results;
     console.log(response);
     let output = '';
     $.each(movies, (index,movie) => {
         output+=` 
         <div class="hero-slide-item">
                        <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="">
                        <div class="overlay"></div>
                        <div class="hero-slide-item-content">
                            <div class="item-content-wraper">
                                <div class="item-content-title top-down">
                                ${movie.title}
                                </div>
                                <div class="movie-infos top-down delay-2">
                                    <div class="movie-info">
                                        <i class="bx bxs-star"></i>
                                        <span>${movie.vote_average}</span>
                                    </div>
                                    <div class="movie-info">
                                        <i class="bx bxs-time"></i>
                                        <span>120 mins</span>
                                    </div>
                                    <div class="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div class="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                                <div class="item-content-description top-down
                                    delay-4">
                                    ${movie.overview}
                                </div>
                                <div class="item-action top-down delay-6">
                                    <a href="#" class="btn btn-hover">
                                        <i class="bx bxs-right-arrow"></i>
                                        <span>Watch now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
         `;
     }); 
     $('#hero-carousel').html(output);
     })
     .catch((err) => {
        console.log(err);
     });
 }
 getMovies();

