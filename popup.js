let bookTitle = document.getElementById('bookTitle').value;
const MY_KEY = '';

//make request
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.goodreads.com/search.xml?key=" + MY_KEY + "&q=Ender%27s+Game", true);
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};
xhr.send();

//display results
