let quote = document.getElementById('quote');
let author = document.getElementById('author');
let test_div = document.getElementById('card');

let fetchQuote = async () => {

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
author.addEventListener("click", fetchQuote);