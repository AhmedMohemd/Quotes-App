var Quote = [
  {
    text: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },
  {
    text: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    text: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
];

var QuotesText = document.getElementById("QuotesText");
var QuotesAuthor = document.getElementById("QuotesAuthor");

function QuotesApp() {
  var changeQuotes = Math.floor(Math.random() * Quote.length);
  var selectQoutes = Quote[changeQuotes];

  document.getElementById("QuotesText").innerHTML = selectQoutes.text;
  document.getElementById("QuotesAuthor").innerHTML = selectQoutes.author;
}
