// Your API key is: 2c548709db814c36946444a9f5a00985

// Url: https://newsapi.org/v2/top-headlines?country=us&apiKey=2c548709db814c36946444a9f5a00985

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2c548709db814c36946444a9f5a00985', true);

xhr.onload = function () {

    let responseObj = JSON.parse(xhr.response)
    // console.log(responseObj.articles);

    let cardContainer = document.getElementById('cardContainer');

    let articlesArray = responseObj.articles;
    // console.log(Array.isArray(  responseObj.articles));

    let cardHtml = '';
    articlesArray.forEach(element => {
        // console.log(element);
        // console.log(element.url);
        // console.log(element.urlToImage);
        // console.log(element.author);
        cardHtml += `<div class="col-sm-4 my-3">
        <div class="card">
            <img src="${element.urlToImage}" class="card-img-top" alt="">

            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" class="btn btn-primary" target = _blank >Read more</a>
            </div>
        </div>
    </div>`

    });




    cardContainer.innerHTML = cardHtml;
}

xhr.send();

