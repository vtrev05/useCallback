import React from 'react'

const ChildComponent = ({click}) => {
    console.log(click())
  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent