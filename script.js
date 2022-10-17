const quotes = {
   in the direction of your dreams.  Live the life you have imagined."',
   
    "- Booker T. Washington": CCR0VC3QBP991
}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});