import React,{ useCallback, useState } from 'react'

const Button = React.memo(({handleClick, name}) => {
    console.log("Button rendered", name)
    return (
        <button onClick={handleClick}>{name}</button>
    )
})

const Counter = () => {
    console.log('counter rendered')
  
    const [stateOne, setStateOne] = useState(0)
    const [stateTwo, setstateTwo] = useState(0)
    console.log(stateOne, stateTwo)
    
    const memoizedStateOne = useCallback(()=> setStateOne(stateOne +1), [stateOne])
    const memoizedStateTwo = useCallback(()=> setstateTwo(stateTwo +1), [stateTwo])

    return(
        <div>
            <div>{stateOne} { stateTwo}</div>
            <Button handleClick={memoizedStateOne} name="1Button"/>
            <Button handleClick={memoizedStateTwo} name="2Button"/>
        </div>
    )
}

export default Counter