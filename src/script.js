const searchMovie = () => {
    const input = document.getElementById('input-cari');
    const result = document.getElementById('result');
    const apiKey = '49cd9371';
    const endPoint = `https://www.omdbapi.com/?apikey=${apiKey}`;

    input.addEventListener("keyup", async () => {
            try {
                const req = await fetch(`${endPoint}&s=${input.value}`)
                const res = await req.json();
                res.Search.forEach(movie => {
            
                result.innerHTML = `
                <div class="card my-2" >
              <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>   `;
          }  )                
            } catch(error) {
                console.log(error)
            }
    })
};

searchMovie()