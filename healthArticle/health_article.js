// declaring variables for XMLHttpRequest and JSON file
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// GET method for asynchronous request
// true: asynchronous, allowing other scripts to run while requestt is processed
xhr.open('GET', url, true); 

// expected response should be in JSON format
xhr.responseType = 'json';

// once data is successfully loaded
xhr.onload = function() {
    var articles = xhr.response.articles; //retrieves articles array from JSON response
    var articlesDiv = document.getElementById('articles'); // retrives HTML element where the fetched content will be displayed

    // iterating through articles and constructing HTML elements
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}

// send request
xhr.send();