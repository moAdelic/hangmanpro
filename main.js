// letters
let letters = "abcdefghijklmnopqrstuvwxyz"
// array from letters
let lettersarray = Array.from(letters)
// select letters containers
let letterscontainer = document.querySelector(".letters")

lettersarray.forEach(letter =>{
    // create span
    let span = document.createElement("span")
    // create textnode 
    theletter = document.createTextNode(letter)
    // add letter to span
    span.appendChild(theletter)
    // add class to span
    span.className = "letter-box"
    // append letters to container
    letterscontainer.appendChild(span)
})

// object of words and category
let words = {
    programming:["php","java script","go","mysql","python","scale","fortran","ruby"],
    movies:["intersteller","wrong turn","dark parasite","donot breath","venus","zompiland","inception"],
    player:["vinijr","rodrego","bellingham","mbappe","fran carcia","enzo","saka","harry kean","musilla"],
    countries:["egypt","syria","qatar","bahrain","yemen","palestine"]
}
// get random property (words)
let allkeys = Object.keys(words)

// get random number depend on keys
let randompropnumber = Math.floor(Math.random() * allkeys.length)
// get name of key (category)
let randompropname =allkeys[randompropnumber] 
// get category words
let randompropvalue = words[randompropname]

// random number debend on words
let randomvaluenumber = Math.floor(Math.random() * randompropvalue.length)
// name of word (vini php )
let randomvaluevalue = randompropvalue[randomvaluenumber];

// set category in span
category_span = document.querySelector(".category > span").innerHTML = randompropname;


// select letter guess
let letterguesscontaioner = document.querySelector(".letters-guess");
// convert chossen word to array
let letterandSpace = Array.from(randomvaluevalue)

// create spans depend on word
letterandSpace.forEach(letter =>{


    // create empty span
    emptyspan = document.createElement("span")

    // if letter space
    if(letter === " "){
        emptyspan.className = "with-space"

    }
    
    // append span to letter guess
    letterguesscontaioner.appendChild(emptyspan)

})



// select guess spans
let guessspan = document.querySelectorAll(".letters-guess span")

// wrong attempts 
let wrongattempts = 0;
// set right letter
let rightletter = 0;
// select the draw
let thedraw = document.querySelector(".hangman-draw")

// handle click in letter
document.addEventListener("click",(e)=>{
    // set status
    let thestatus = false;

    if(e.target.className === "letter-box"){

        e.target.classList.add("clicked")

    // get clicked letter 
    let clickedLetter = e.target.innerHTML.toLowerCase();
    // console.log(clickedLetter)
    // the chosen word
    let chossenword = Array.from(randomvaluevalue.toLowerCase())

    chossenword.forEach((wordletter,wordIndex)=>{

    
        if (clickedLetter == wordletter) {
            rightletter++;
            // set status to correct
            thestatus = true
            // console.log(thestatus)
            // loop in spans
            guessspan.forEach((span,spanindex)=>{
                if(wordIndex === spanindex){
                    span.innerHTML = clickedLetter;
                }
            });

        }

        

    });

        if(thestatus !== true){
            // increase wrong attempt
            wrongattempts++;

            // add class to draw
            thedraw.classList.add(`wrong-${wrongattempts}`)

            document.getElementById("fail").play();
            if(wrongattempts === 8){
                gameover();
                letterscontainer.classList.add("finished");
            }

        }else{

            document.getElementById("success").play();

            if(guessspan.length === rightletter){

                win();
            }


        }
    }


})



// end game function
function gameover(){
    // create div popup
    let div = document.createElement("div")

    // create text
    let divtext = document.createTextNode("game over, the wrod is "+randomvaluevalue)
    div.appendChild(divtext);
    // add class to div
    div.className = "popup"
    // append to body
    document.body.appendChild(div)

}       
function win(){
    // create div popup
    let div = document.createElement("div")

    // create text
    let divtext = document.createTextNode(`congratulations and your mistake is ${wrongattempts}`)
    div.appendChild(divtext);
    // add class to div
    div.className = "popup"
    // append to body
    document.body.appendChild(div)

}     