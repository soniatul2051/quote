const quoteContainer = document.getElementById('quote-container');
const quotetext = document.getElementById('quote');
const authortext = document.getElementById('author');
const twitterbtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuote = [];
var localQuotes = [];
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
function newQuote() {
    loading();
    const selectedQuote = apiQuote.length > 0 ? apiQuote[Math.floor(Math.random() * apiQuote.length)] : localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authortext.textContent = selectedQuote.author;
    quotetext.textContent = selectedQuote.text;
    complete();
}

async function getQuote() {
    loading();
    const apiurl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiurl);
        apiQuote = await response.json();
        newQuote();
    } catch (error) {
        console.error(error);
    }

}
function tweetQute(){
    const tweeturl = `https://twitter.com/intent/tweet?text=${quotetext.textContent}-${authortext.textContent}`;
    window.open(tweeturl,'_blank');
}

// Button Event Listeners
newQuotebtn.addEventListener('click', newQuote);
twitterbtn.addEventListener('click',tweetQute);

// Initialize with a quote
getQuote();

var localQuotes = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
    },
    {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
    },
    // Add more local quotes as needed
];