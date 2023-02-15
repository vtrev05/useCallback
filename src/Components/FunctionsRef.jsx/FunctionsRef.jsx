import React from 'react'

const FunctionsRef = () => {

    function factory() {
        return (a, b) => a + b;
      }
      const sum1 = factory();
      const sum2 = factory();
      sum1(1, 2); // => 3
      sum2(1, 2); // => 3
      sum1 === sum1; // => true

      const victorData = {name: 'Víctor'}
      const victorDataCopy = {name: 'Víctor'}
      console.log(victorData === victorData)

  return (
    <div>FunctionsRef</div>
  )
}

export default FunctionsRef