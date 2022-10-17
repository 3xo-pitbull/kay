const quotes = {
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    can help an individual more than to place responsibility on him, an
}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});
