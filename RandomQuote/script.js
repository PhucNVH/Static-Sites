let quoteData;
$.getJSON("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", function (data) {
    quoteData = data;
    console.log(quoteData);
});
function randomQuote() {
    const lenQuote = quoteData.quotes.length;
    let randomNum = Math.floor(Math.random() * (lenQuote - 1));
    let quoteText = quoteData.quotes[randomNum].quote;
    let quoteAuthor = "-" + quoteData.quotes[randomNum].author;
    $("#text span").text(quoteText);
    $("#author").text(quoteAuthor);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function newQuote() {
    randomQuote();
    var randomColor = getRandomColor();
    $("body").css("background-color", randomColor);
    $("body").css("color", randomColor);
    $("#next-quote").css("background-color", randomColor);
}


$("#next-quote").click(newQuote);