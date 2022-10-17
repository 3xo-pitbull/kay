const quotes = {
    "- 823842884265": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    "- 502148632574": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    "- 586327854128": '"Don’t Let Yesterday Take Up Too Much Of Today."',
    "- 253654782541": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    "- 085236987456": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    "- 853214589635": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    "- 214536985214": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    "- 475236985127": '"Strive not to be a success, but rather to be of value."',
    "- 325698536918": '"I attribute my success to this: I never gave or took any excuse."',
    "- 853695214756": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    "- 853695247128": '"Every strike brings me closer to the next home run."',
    "- 053846965412": '"Life is what happens to you while you’re busy making other plans."',
    "- 059635869621": '"We become what we think about."',
    "- 853952186693": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- 327895123695": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- 258036911775": '"The mind is everything. What you think you become."',
    "- 085236974582": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- 852369541236": '"Eighty percent of success is showing up."',
    "- 852365412589": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- 582369452156": '"Winning isn’t everything, but wanting to win is."',
    "- 321456987059": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- 056952685605": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- 147805236987": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- 369582147853": '"Either you run the day, or the day runs you."',
    "- 352523698726": '"Whether you think you can or you think you can’t, you’re right."',
    "- 582896314756": '"The best revenge is massive success."',
    "- 085236925836": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- 785412369052": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- 365214852694": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- 085369524863": '"The only person you are destined to become is the person you decide to be."',
    "- 258362176826": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- 669569568214": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- 583926826826": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});
