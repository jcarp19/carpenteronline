"use strict";
const quotes = [{quote: "There are three kinds of lies: lies, damned lies, and statistics.", author: "Benjamin Disraeli"},
{quote: "Things are more like they are now than they have ever been.", author: "Gerald R. Ford"},
{quote: "You know, you can't please all the people all the time... and last night, all those people were at my show.", author: "Mitch Hedberg"},
{quote: "Facts do not cease to exist because they are ignored.", author: "Aldous Huxley"},
{quote: "I know a lot about cars. I can look at a car's headlights and tell you exactly which way it's coming.", author: "Mitch Hedberg"},
{quote: "There is not any memory with less satisfaction than the memory of some temptation we resisted.", author: "James Branch Cabell"},
{quote: "What some people mistake for the high cost of living is really the cost of high living.", author: "Doug Larson"},
{quote: "I never vote for anyone; I always vote against.", author: "W. C. Fields"},
{quote: "Everything you've learned in school as \"obvious\" becomes less and less obvious as you begin to study the universe. For example, there are no solids in the universe. There's not even a suggestion of a solid. There are no absolute continuums. There are no surfaces. There are no straight lines.", author: "R. Buckminster Fuller"},
{quote: "What happens when the future has come and gone?", author: "Robert Half"},
{quote: "I love being a writer. What I can't stand is the paperwork.", author: "Peter De Vries"},
{quote: "In modern America, anyone who attempts to write satirically about the events of the day finds it difficult to concoct a situation so bizarre that it may not actually come to pass while the article is still on the presses.", author: "Calvin Trillin"},
{quote: "No one can earn a million dollars honestly.", author: "William Jennings Bryan"},
{quote: "If you're not part of the solution, you're part of the precipitate.", author: "Henry J. Tillman"},
{quote: "One is tempted to define man as a rational animal who always loses his temper when he is called upon to act in accordance with the dictates of reason.", author: "Oscar Wilde"},
{quote: "You can't make up anything anymore. The world itself is a satire. All you're doing is recording it.", author: "Art Buchwald"},
{quote: "Somewhere on this globe, every ten seconds, there is a woman giving birth to a child. She must be found and stopped.", author: "Sam Levenson"},
{quote: "Howard Hughes was able to afford the luxury of madness, like a man who not only thinks he is Napoleon but hires an army to prove it.", author: "Ted Morgan"},
{quote: "There is nothing more dreadful than imagination without taste.", author: "Johann Wolfgang von Goethe"},
{quote: "Fall not in love, therefore; it will stick to your face.", author: "National Lampoon, \"Deteriorata\""},
{quote: "Women need a reason to have sex. Men just need a place.", author: "Billy Crystal"},
{quote: "He who hesitates is a damned fool.", author: "Mae West"},
{quote: "People who get nostalgic about childhood were obviously never children.", author: "Bill Watterson"},
{quote: "Happiness is always a by-product. It is probably a matter of temperament, and for anything I know it may be glandular. But it is not something that can be demanded from life, and if you are not happy you had better stop worrying about it and see what treasures you can pluck from your own brand of unhappiness.", author: "Robertson Davies"}]

const getQuote = () => {
    // get a random quote from the quotes array
    let randomQuote = Math.floor(Math.random() * quotes.length);
    document.querySelector(".quote-detail__quote").innerHTML = "<q>" + quotes[randomQuote].quote + "</q>";
    document.querySelector(".quote-detail__author").innerHTML = quotes[randomQuote].author;
    
    console.log(randomQuote)
}