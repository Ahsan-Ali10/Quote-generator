let container=document.querySelector(".container")
let h3=document.querySelector("h3")
let h6=document.querySelector("h6")
let btn=document.querySelector("button")

let quotes=[
    {text:"The only way to do great work is to love what you do.",
    author:"Steve Jobs"
        
    },
    {
        text:"It does not matter how slowly you go as long as you do not stop.",
        author:"Confucius"
    },
    {
        text:"In the middle of difficulty lies opportunity.",
        author:"Albert Einstein"
    },
    {
        text:"The future belongs to those who believe in the beauty of their dreams.",
        author:"Eleanor Roosevelt"

    },
    {
        text:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author:"Winston Churchill"
    },
    {
        text:"Believe you can and you're halfway there.",
        author:"Theodore Roosevelt"
    },
    {
        text:"Do what you can, with what you have, where you are.",
        author:"Theodore Roosevelt"
    },
    {
        text:"The journey of a thousand miles begins with one step.",
        author:"Lao Tzu"
    },
    {
        text:"Everything you can imagine is real.",
        author:"Pablo Picasso"
    },
    {
        text:"It always seems impossible until it's done.",
        author:"Nelson Mandela"
    }
]

btn.addEventListener("click",chooseQuote)
function chooseQuote(){
    let randIdx=Math.floor(Math.random()*quotes.length)
    let randText=quotes[randIdx].text;
    let randAuthor=quotes[randIdx].author;

    // console.log(randText);
    // console.log(randAuthor);
    h3.innerText=randText;
    h6.innerText=`_${randAuthor}`

}



chooseQuote();