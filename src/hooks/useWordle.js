import { useState } from "react"

const useWordle = (solution) =>{

    const [turn,setTurn]=useState(0)
    const [currentGuess,setCurrentGuess]=useState("")
    const [guesses,setGuesses]=useState([]) // each guess as an array
    const [gameHistory,setGameHistory]=useState([]) // each guess as a string
    const [isCorrect,setIsCorrect]=useState(false)


    // i will take the guess and put them into an object
    // by each letter and a color based on solution
    // [{key:"e",color:"yellow"}] like this
    const formatGuess =()=>{

    }

    //add a new guess to guess state
    //update state if guess is correct
    // add +1 to game turn state
    const addNewGuess =()=>{

    }


    //handle keyup event and track current guess
    //if user presses enter add the new guess into state
    const handleKeyup =()=>{

    }


    return {turn,currentGuess,guesses,isCorrect,handleKeyup}

}


export default useWordle