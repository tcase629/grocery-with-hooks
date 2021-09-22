import { useState } from 'react';

const App = ({}) => {
  const [items, setItems] = useState([
    { id: 1, item: "bananas", price: 1, complete: false},
    { id: 2, item: "bread", price: 2, complete: false},
    { id: 3, item: "eggs", price: 3, complete: false}
  ])

  return (
    <>
      <h1>Hi Lets Do This!!!</h1>
    </>
  )
}

export default App;
