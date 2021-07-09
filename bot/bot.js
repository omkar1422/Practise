const Discord = require("discord.js");
const { listenerCount } = require("events");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  client.user.setActivity("Finance", { type: "LEARNING" });
});

client.on("message", (rMessage) => {
  if (rMessage.author == client.user) {
    return;
  }
  //   rMessage.channel.send("Message Received!! " + rMessage.author.toString());
  if (rMessage.content.startsWith("!")) {
    processCommand(rMessage);
  }
});

function processCommand(rMessage) {
  let realCommand = rMessage.content.substr(1);
  if (realCommand == "help") {
    processHelp(rMessage);
  } else if (realCommand == "Quote") {
    processQuote(rMessage);
  } else if (realCommand == "fQuote") {
    processfQuote(rMessage);
  }
}

function processfQuote(rMessage) {
  let a = Math.floor(Math.random() * 100 + 1);
  rMessage.channel.send(rMessage.author.toString());
  rMessage.channel.send(fQuotes[a]);
}
function processQuote(rMessage) {
  let a = Math.floor(Math.random() * 100 + 1);
  rMessage.channel.send(rMessage.author.toString());
  rMessage.channel.send(QUOTES.quotes[a].quote);
  rMessage.channel.send(" -- " + QUOTES.quotes[a].author);
}

function processHelp(rMessage) {
  rMessage.channel.send("These are the list of commands to use this bot");
  rMessage.channel.send("Use !fQuote to display a financial Quote");
  rMessage.channel.send("Use !Quote to display a motivational Quote");
}

client.login("ODYwNzkzODY4NjYzNjUyMzUy.YOAaww.ExRzR0SAePeaUlKZN2AbOrMPFtY");

let QUOTES = {
  quotes: [
    {
      quote: "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      quote: "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      quote: "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      quote: "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain",
    },
    {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      quote: "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      quote: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
    },
    {
      quote: "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso",
    },
    {
      quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      quote: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      quote: "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra",
    },
    {
      quote: "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
      author: "Zig Ziglar",
    },
    {
      quote: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anais Nin",
    },
    {
      quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "Vincent Van Gogh",
    },
    {
      quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "Aristotle",
    },
    {
      quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "Jesus",
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
      author: "Henry David Thoreau",
    },
    {
      quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      author: "Erma Bombeck",
    },
    {
      quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      author: "Booker T. Washington",
    },
    {
      quote: "Certain things catch your eye, but pursue only those that capture the heart.",
      author: " Ancient Indian Proverb",
    },
    {
      quote: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },
    {
      quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "Maimonides",
    },
    {
      quote: "Start where you are. Use what you have.  Do what you can.",
      author: "Arthur Ashe",
    },
    {
      quote: "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author: "John Lennon",
    },
    {
      quote: "Fall seven times and stand up eight.",
      author: "Japanese Proverb",
    },
    {
      quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "Helen Keller",
    },
    {
      quote: "Everything has beauty, but not everyone can see.",
      author: "Confucius",
    },
    {
      quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "Anne Frank",
    },
    {
      quote: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu",
    },
    {
      quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou",
    },
    {
      quote: "Happiness is not something readymade.  It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg",
    },
    {
      quote: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
      author: "Aristotle",
    },
    {
      quote: "If the wind will not serve, take to the oars.",
      author: "Latin Proverb",
    },
    {
      quote: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
      author: "Unknown",
    },
    {
      quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie",
    },
    {
      quote: "Too many of us are not living our dreams because we are living our fears.",
      author: "Les Brown",
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine",
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "Leonardo da Vinci",
    },
    {
      quote: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
      author: "Jamie Paolinetti",
    },
    {
      quote: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "Erica Jong",
    },
    {
      quote: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      author: "Bob Dylan",
    },
    {
      quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "Benjamin Franklin",
    },
    {
      quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
      author: "Bill Cosby",
    },
    {
      quote: "A person who never made a mistake never tried anything new.",
      author: " Albert Einstein",
    },
    {
      quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "Chinese Proverb",
    },
    {
      quote: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach",
    },
    {
      quote: "It is never too late to be what you might have been.",
      author: "George Eliot",
    },
    {
      quote: "You become what you believe.",
      author: "Oprah Winfrey",
    },
    {
      quote: "I would rather die of passion than of boredom.",
      author: "Vincent van Gogh",
    },
    {
      quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "Unknown",
    },
    {
      quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers",
    },
    {
      quote: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      author: "Abigail Van Buren",
    },
    {
      quote: "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray",
    },
    {
      quote: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      author: "Jesse Owens",
    },
    {
      quote: "Education costs money.  But then so does ignorance.",
      author: "Sir Claus Moser",
    },
    {
      quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      author: "Rosa Parks",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "Dalai Lama",
    },
    {
      quote: "You can’t use up creativity.  The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote: "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins",
    },
    {
      quote: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem",
    },
    {
      quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
    },
    {
      quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
    },
    {
      quote: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses",
    },
    {
      quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quote: "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote: "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      quote: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "–Audrey Hepburn",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar",
    },
  ],
};
let fQuotes = [
  "Too many people spend money they earned..to buy things they don't want..to impress people that they don't like. --Will Rogers",
  "A wise person should have money in their head, but not in their heart. --Jonathan Swift",
  "Wealth consists not in having great possessions, but in having few wants. --Epictetus",
  "Money often costs too much. --Ralph Waldo Emerson",
  "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each. --Christopher Rice",
  "It's how you deal with failure that determines how you achieve success. --David Feherty",
  "Frugality includes all the other virtues. --Cicero",
  "I love money. I love everything about it. I bought some pretty good stuff. Got me a $300 pair of socks. Got a fur sink. An electric dog polisher. A gasoline powered turtleneck sweater. And, of course, I bought some dumb stuff, too. --Steve Martin",
  "An investment in knowledge pays the best interest. --Benjamin Franklin",
  "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. --Warren Buffett",
  "",
  "Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery. --Charles Dickens",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work. --Thomas Edison",
  "What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us. --Julia Cameron",
  "I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for ten years. --Warren Buffett",
  "A nickel ain't worth a dime anymore. --Yogi Berra",
  "Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one. --Benjamin Franklin",
  "Many people take no care of their money till they come nearly to the end of it, and others do just the same with their time. --Johann Wolfgang von Goethe",
  "Formal education will make you a living; self-education will make you a fortune. --Jim Rohn",
  "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. --Ayn Rand",
  "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this. --Dave Ramsey",
  "It is not the man who has too little, but the man who craves more, that is poor. --Seneca",
  "It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages. --Henry Ford",
  "He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all. --Eleanor Roosevelt",
  "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort. --Franklin D. Roosevelt",
  "Empty pockets never held anyone back. Only empty heads and empty hearts can do that. --Norman Vincent Peale",
  "It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy. --George Lorimer",
  "You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you. --Maya Angelou",
  "Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing. --J. Paul Getty",
  "If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability. --Henry Ford",
  "If all the economists were laid end to end, they’d never reach a conclusion. --George Bernard Shaw",
  "How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case. --Robert G. Allen",
  "I made my money the old-fashioned way. I was very nice to a wealthy relative right before he died. --Malcolm Forbes",
  "Innovation distinguishes between a leader and a follower. --Steve Jobs",
  "The real measure of your wealth is how much you'd be worth if you lost all your money. --Anonymous",
  "Money is a terrible master but an excellent servant. --P.T. Barnum",
  "Try to save something while your salary is small; it’s impossible to save after you begin to earn more. --Jack Benny",
  "Wealth is the ability to fully experience life. --Henry David Thoreau",
  "The individual investor should act consistently as an investor and not as a speculator. --Ben Graham",
  "I’m a great believer in luck, and I find the harder I work the more I have of it. --Thomas Jefferson",
  "You must gain control over your money or the lack of it will forever control you. --Dave Ramsey",
  "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas. --Paul Samuelson",
  "Every time you borrow money, you're robbing your future self. --Nathan W. Morris",
  "Rich people have small TVs and big libraries, and poor people have small libraries and big TVs. --Zig Ziglar",
  "Never spend your money before you have it. --Thomas Jefferson",
  "The stock market is filled with individuals who know the price of everything, but the value of nothing. --Phillip Fisher",
  "Wealth is not his that has it, but his that enjoys it. --Benjamin Franklin",
  "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for. --Robert Kiyosaki",
  "I have not failed. I’ve just found 10,000 ways that won’t work. --Thomas A. Edison",
  "If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it. --Kim Garst",
  "Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They’re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can’t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. --Steve Jobs",
  "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind. --T.T. Munger",
  "Don't tell me what you value, show me your budget, and I'll tell you what you value.” --Joe Biden",
  "If you live for having it all, what you have is never enough. --Vicki Robin",
  "Before you speak, listen. Before you write, think. Before you spend, earn. Before you invest, investigate. Before you criticize, wait. Before you pray, forgive. Before you quit, try. Before you retire, save. Before you die, give. --William A. Ward",
  "We make a living by what we get, but we make a life by what we give. --Winston Churchill",
  "Wealth after all is a relative thing since he that has little and wants less is richer than he that has much and wants more. --Charles Caleb Colton",
  "Not everything that can be counted counts, and not everything that counts can be counted. --Albert Einstein",
  "It is time for us to stand and cheer for the doer, the achiever, the one who recognizes the challenge and does something about it. --Vince Lombardi",
  "It's not the situation, but whether we react (negative) or respond (positive) to the situation that's important. --Zig Ziglar",
  "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. --David Brinkley",
  "Let him who would enjoy a good future waste none of his present. --Roger Babson",
  "Courage is being scared to death, but saddling up anyway. --John Wayne",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. --Mahatma Gandhi",
  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. --Mark Twain",
  "It is our choices, that show what we truly are, far more than our abilities. --J. K Rowling",
  "The successful warrior is the average man, with laser-like focus. --Bruce Lee",
  "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. --Dale Carnegie",
  "The question isn’t who is going to let me; it’s who is going to stop me. --Ayn Rand",
  "Don’t let the fear of losing be greater than the excitement of winning. --Robert Kiyosaki",
  "You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something – your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. --Steve Jobs",
  "Let no feeling of discouragement prey upon you, and in the end you are sure to succeed. --Abraham Lincoln",
  "Screw it, Let’s do it! --Richard Branson",
  "If your ship doesn’t come in, swim out to meet it! --Jonathan Winters",
  "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily. --Zig Ziglar",
  "A real entrepreneur is somebody who has no safety net underneath them. --Henry Kravis",
  "As long as you’re going to be thinking anyway, think big. --Donald Trump",
  "The only place where success comes before work is in the dictionary. --Vidal Sassoon",
  "Success is walking from failure to failure with no loss of enthusiasm. --Winston Churchill",
  "Without continual growth and progress, such words as improvement, achievement, and success have no meaning. --Benjamin Franklin",
  "If plan A fails, remember there are 25 more letters. --Chris Guillebeau",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. --Ralph Waldo Emerson",
  "A journey of a thousand miles must begin with a single step. --Lao Tzu",
  "Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it. --Oprah Winfrey",
  "Believe you can and you’re halfway there. --Theodore Roosevelt",
  "The Stock Market is designed to transfer money from the Active to the Patient. --Warren Buffett",
  "I’m only rich because I know when I’m wrong…I basically have survived by recognizing my mistakes. --George Soros",
  "Persist – don’t take no for an answer. If you’re happy to sit at your desk and not take any risk, you’ll be sitting at your desk for the next 20 years. --David Rubenstein",
  "If you took our top fifteen decisions out, we’d have a pretty average record. It wasn’t hyperactivity, but a hell of a lot of patience. You stuck to your principles and when opportunities came along, you pounced on them with vigor. --Charlie Munger",
  "When buying shares, ask yourself, would you buy the whole company? --Rene Rivkin",
  "If you have trouble imagining a 20% loss in the stock market, you shouldn’t be in stocks. --John Bogle",
  "My old father used to have a saying:  If you make a bad bargain, hug it all the tighter. --Abraham Lincoln",
  "It takes as much energy to wish as it does to plan. --Eleanor Roosevelt",
  "The four most expensive words in the English language are, ‘This time it’s different.’ --Sir John Templeton",
  "I'd like to live as a poor man with lots of money. --Pablo Picasso",
  "Fortune sides with him who dares. --Virgil",
  "Wealth is like sea-water; the more we drink, the thirstier we become; and the same is true of fame. --Arthur Schopenhauer",
  "If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed. --Edmund Burke",
  "No wealth can ever make a bad man at peace with himself. --Plato",
  "My formula for success is rise early, work late and strike oil. --JP Getty",
  "The best thing money can buy is financial freedom. --Me",
];
