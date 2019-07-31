//array of JSON(quotes) to hold the value of QUOTES.
let arrayOfQuote = [
    {
        "author": "Walt Disney",
        "quote": "The Way Get Started Is To Quit Talking And Begin Doing."
    },
    {
        "author": "Winston Churchill",
        "quote": "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."
    },
    {
        "author": "Will Rogers",
        "quote": "Don’t Let Yesterday Take Up Too Much Of Today."
    },

    {
        "author": "Steve Jobs",
        "quote": "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You."
    },
    {
        "author": "Rob Siltanen",
        "quote": "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do."
    },
    {
        "author": "Maya Angelou",
        "quote": "We May Encounter Many Defeats But We Must Not Be Defeated."
    },
    {
        "author": "Dr. Henry Link",
        "quote": "We Generate Fears While We Sit. We Overcome Them By Action."
    },
    {
        "author": "Helen Keller",
        "quote": "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing."
    },
    {
        "author": "Albert Einstein",
        "quote": "Creativity Is Intelligence Having Fun."
    },
    {
        "author": "Zig Ziglar",
        "quote": "You Don’t Have To Be Great To Start, But You Have To Start To Be Great."
    }

];
function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuote.length + 1);
    document.querySelector("#quoteOutput").textContent = `"${arrayOfQuote[random].quote}"`;
    document.querySelector("#authorOutput").textContent = `"${arrayOfQuote[random].author}"`;

}