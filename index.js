// let movie_REF = document.getElementById('search-box');
// let search_box = document.getElementById('search-holder');
// let search_btn = document.getElementById('search-btn');
// let movie_plot = document.getElementById('movie-plot');
// let rating = document.getElementById('rating');
// let poster = document.getElementById('poster');
// let card = document.getElementById('card');


// let count = 0;

// let genre1 = document.getElementById('genre1');
// let genre2 = document.getElementById('genre2');
// let genre3 = document.getElementById('genre3');

// let year = document.getElementById('year');
// let rated = document.getElementById('rated');
// let actors = document.getElementById('actors');
// let title = document.getElementById('title');

// let runtime = document.getElementById('runtime');

// let key = "b7774c7";

// let fetchMovie = async () => {
//     let movie_name = movie_REF.value;
//     console.log(movie_name);
//     let url = `http://www.omdbapi.com/?t=${movie_name}&apikey=${key}`;
    
//     const response = await fetch(url);
//     const movie_info = await response.json(); //extract JSON from the http response
//     console.log(movie_info);
    
//     // format for how to access movie properties
//     // console.log(movie_info.Title);
//     /*
//     Actors
//     Awards
//     Box Office
//     Country
//     DVD
//     Director
//     Genre
//     Language
//     Metascore
//     Plot
//     Poster
//     Production
//     Ratings
//     Released
//     Response
//     Runtime
//     Title
//     Type
//     Website
//     Writer
//     Year
//     imdbID
//     imdbRating
//     imdbVotes
//     */
//     if (movie_info.Response === "True") {

//         count = count + 1;
//         console.log(count);

//         movie_plot.innerHTML = movie_info.Plot;
//         rating.innerHTML = movie_info.imdbRating;

//         let genre_array = movie_info.Genre.split(",");
    
//         genre1.innerHTML = genre_array[0];
//         genre2.innerHTML = genre_array[1];
//         genre3.innerHTML = genre_array[2];




//         year.innerHTML = movie_info.Year;
//         rated.innerHTML = movie_info.Rated;
//         actors.innerHTML = movie_info.Actors;
//         title.innerHTML = movie_info.Title;

//         runtime.innerHTML = movie_info.Runtime;

//         poster.innerHTML = `<img src=${movie_info.Poster} class="poster">`

//     } else if (movie_info.Response === "False") {
//         title.innerHTML = "Movie not found!";
//     }


// }

// let animate = async () => {
//     search_box.style.display = "block";
//     search_box.classList.add("animate");
    
//     setTimeout(function() {
//         search_box.classList.remove("animate");
//     }, 500); // 500 is the same time as the CSS animation
// }

// let temp = async () => {
//     search_box.classList.toggle("is-active");
//     document.getElementById("search-btn").removeEventListener("click", temp);
// }

// search_btn.addEventListener("click", fetchMovie);
// document.getElementById("search-btn").addEventListener("click", temp);
// // search_btn.addEventListener("click", animate);
// // document.getElementById("search-btn").addEventListener("click", function() {
// //     search_box.classList.toggle("is-active");
// // });

let quote = document.getElementById('quote');
let author = document.getElementById('author');
let test_div = document.getElementById('card');

let fetchQuote = async () => {
    
    // let file = document.getElementById("csvFileInput").files[0]
    // Papa.parse(file, {
    //     complete: function(result) {
    //         console.log(result.data)
    //   }
    // })

    let file = 'quotes.csv';
    
    Papa.parse(file, {
        download: true,
        complete: function(result) {
            // console.log(result.data)
            
            var item = result.data[Math.floor(Math.random()*result.data.length)];

            quote.innerHTML = '\"' + item.at(0) + '\"';
            author.innerHTML = item.at(1);

            console.log(item);

      }
    })
    
}


function fetch() {
    fetchQuote();
 }

quote.addEventListener("click", fetchQuote);