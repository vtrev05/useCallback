import React, { useCallback, useMemo, useState } from 'react'

const Operators = () => {

const [cont, setCont] = useState(1)

const multiplicar = () => {
    return cont * 2
}

const callback = useCallback(multiplicar, [cont])
const memo = useMemo(multiplicar, [cont])

console.log(callback) 
 console.log(callback()) 
console.log(memo)

  return (
    <div>
        <button onClick={()=> setCont(cont + 1)}>INCREMENTAR</button>
        {cont}
    </div>
  )
}

export default Operators