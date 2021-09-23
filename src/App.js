import { useState } from 'react';
import GroceryList from './components/groceries/GroceryList';
import GroceryForm from './components/groceries/GroceryForm';
const App = ({}) => {
  const [groceries, setGroceries] = useState([
    { id: 1, item: "bananas", price: 1, complete: false},
    { id: 2, item: "bread", price: 2, complete: false},
    { id: 3, item: "eggs", price: 3, complete: false},
    { id: 4, item: "pizza", price: 5, complete: false},
    { id: 5, item: "milk", price: 3, complete: false},
  ])

  const getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  const addGrocery = (incommingGrocery) => {
    let newGrocery = { id: getId(), ...incommingGrocery }
    setGroceries([...groceries, newGrocery])
  }

  const removeGrocery = (id) => {
    setGroceries(groceries.filter( g => g.id !== id))
  }

  const updateGrocery = (id, incommingGrocery) => {
    const updateGroceries = groceries.map( g => {
      if (g.id === id) {
      return incommingGrocery
      }
      return g
    })
    setGroceries(updateGroceries)
  }

  const groceryClick = (id) => {
    setGroceries(groceries.map( g => {
      if (g.id === id) {
        return {
          ...g, complete: !g.complete
        }
      }
      return g
    }))
  }

  return (
    <>
      <h1>Grocery List</h1>
      <br />
      <GroceryForm addGrocery={addGrocery} />
      <GroceryList 
      groceries={groceries} 
      removeGrocery={removeGrocery}
      updateGrocery={updateGrocery}
      groceryClick={groceryClick}
      />
    </>
  )
}

export default App;
