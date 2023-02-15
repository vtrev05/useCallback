import React, {useCallback} from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

const MyComponent = () => {
    const handleClick = useCallback(()=> {
        console.log('clicked')
        console.log('Almacena TODO')
    }, [])
  return (
    <div><ChildComponent click={handleClick}/></div>
  )
}

export default MyComponent