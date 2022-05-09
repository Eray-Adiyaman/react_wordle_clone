import { useState } from "react"

const useWordle = (solution) =>{

    const [turn,setTurn]=useState(0)
    const [currentGuess,setCurrentGuess]=useState("")
    const [guesses,setGuesses]=useState([]) // each guess as an array
    const [gameHistory,setGameHistory]=useState(["crane","spade"]) // each guess as a string
    const [isCorrect,setIsCorrect]=useState(false)


    // i will take the guess and put them into an object
    // by each letter and a color based on solution
    // [{key:"e",color:"yellow"}] like this
    const formatGuess =()=>{
        console.log("formatting guess-- ", currentGuess)
    }

    //add a new guess to guess state
    //update state if guess is correct
    // add +1 to game turn state
    const addNewGuess =()=>{

    }


    //handle keyup event and track current guess
    //if user presses enter add the new guess into state
    const handleKeyup =({ key })=>{
        if(key ==="Enter"){
            //only add guess if turn is less than 5
            if(turn > 5){
                console.log("used all your guesses")
                return;
            }
            // do not allow duplicate words
            if(gameHistory.includes(currentGuess)){
                console.log("you already tried that word")
                return;

            }
            // guess has to be length 5
            if(currentGuess.length !== 5){
                console.log("word must be 5 chars long")
                return;

            }
            formatGuess()
        }
        if(key === "Backspace"){
            setCurrentGuess((prev)=>{
                //return a new string with removed last char
                return prev.slice(0,-1)
            })
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length<5){
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }

    }


    return {turn,currentGuess,guesses,isCorrect,handleKeyup}

}


export default useWordle