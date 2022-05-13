import { useState } from "react"

const useWordle = (solution) =>{

    const [turn,setTurn]=useState(0)
    const [currentGuess,setCurrentGuess]=useState("")
    const [guesses,setGuesses]=useState([...Array(6)]) // each guess as an array
    const [gameHistory,setGameHistory]=useState([]) // each guess as a string
    const [isCorrect,setIsCorrect]=useState(false)
    const [usedKeys,setUsedKeys]=useState({})

    // i will take the guess and put them into an object
    // by each letter and a color based on solution
    // [{key:"e",color:"yellow"}] like this
    const formatGuess =()=>{
        let solutionArray = [...solution]
        let formatedGuess = [...currentGuess].map((letter)=> {
            return {key:letter,color: "grey"}
        })

        //find any correct position letters and give color green
        formatedGuess.forEach((letter,i)=>{
            if(solutionArray[i] === letter.key){
                formatedGuess[i].color = "green"
                solutionArray[i]= null // so i dont double match in future
            }
        })

        //find any wrong position correct letter and give color yellow
        formatedGuess.forEach((letter,i)=>{
            if(solutionArray.includes(letter.key) && letter.color !== "green"){
                formatedGuess[i].color = "yellow"
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formatedGuess

    }

    //add a new guess to guess state
    //update state if guess is correct
    // add +1 to game turn state
    const addNewGuess =(formatedGuess)=>{
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prev)=>{
            let newGuesses = [...prev]
            newGuesses[turn] = formatedGuess
            return newGuesses
        })
        
        setGameHistory((prev)=>{
            return [...prev,currentGuess]
        })

        setTurn((prev)=>{
            return prev +1
        })

        setUsedKeys((previousUsedKeys)=>{
            let newKeys = {...previousUsedKeys}
            
            formatedGuess.forEach(letter =>{
                const currentColor = newKeys[letter.key]
                if(letter.color === "green"){
                    newKeys[letter.key] = "green"
                    return
                }
                if(letter.color ==="yellow" && currentColor !== "green"){
                        newKeys[letter.key] = "yellow"
                        return
                }
                if(letter.color ==="grey" && currentColor !== "green" && currentColor !== "yellow"){
                    newKeys[letter.key] = "grey"
                    return
                }
            })

            return newKeys
        })

        setCurrentGuess("")

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
           const formatted = formatGuess()
           addNewGuess(formatted)
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


    return {turn,currentGuess,guesses,isCorrect,handleKeyup,usedKeys}

}


export default useWordle