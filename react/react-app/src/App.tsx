// import { Fragment } from "react";
// import { ChildComponet } from "./ChildComponent";
// import { useState } from "react";

// export const App = () => {
//   return <Fragment>
//     <h1>helloo</h1>
//     <p>heyy</p>
//     <ChildComponet p1="data1" p2="data2" data="data">
//       <span>This is the child Element(App.tsx)</span>
//     </ChildComponet>
//   </Fragment>
// }



// export const App = () => {

//   const [state, setState] = useState<number>(0)

//   const handleButton = () => {
//     setState(state + 1)
//   }

//   return <div>
//     <h2>increament - {state}</h2>

//     <button onClick={handleButton}>Click me!</button>
//   </div>
// }

// state

import { Fragment } from "react"
import { useState } from "react"
import { ChildComponent } from "./ChildComponent";

type counter = {
  counter_one: number;
  counter_two: number;
}

type counterType = 1 | 2;

export const App = () => {

  const [counter, setCounter] = useState<counter>({ counter_one: 0, counter_two: 0 })

  const handleCounter = (num: counterType) => {
    if (num == 1) {
      setCounter({ ...counter, counter_one: counter.counter_one + 1 })
    }
    if (num == 2) {
      setCounter({ ...counter, counter_two: counter.counter_two + 1 })
    }
  }

  return <Fragment>
    <p>counter_one:{counter.counter_one} </p>
    <p>counter_two: {counter.counter_two}</p>


    <button onClick={() => handleCounter(1)}>Counter one</button>
    <button onClick={function () {
      handleCounter(2)
    }}>Counter two</button>

    <ChildComponent>

    </ChildComponent>
  </Fragment>
}
