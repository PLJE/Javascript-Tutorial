const quotes = [
    {
        quote : "It always seems impossible until it's done.",
        author : "Nelson Mandela"
    },
    {
        quote : "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        author : "St. Jerome"
    },
    {
        quote : "Life is 10% what happens to you and 90% how you react to it.",
        author : "Charles R. Swindoll"
    },
    {
        quote : "If you can dream it, you can do it.",
        author : "Walt Disney"
    },
]; //4 quotes

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;