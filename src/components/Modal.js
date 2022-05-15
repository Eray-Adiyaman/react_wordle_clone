
export default function Modal({isCorrect,turn,solution}) {

  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Won!</h1>
                <p className='solution'> {solution}</p>
                <p>You guessed it correct at {turn} turns!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You Lost!</h1>
                <p className='solution'> {solution}</p>
                <p>Better luck next time</p>
            </div>
        )}

    </div>
  )
}
