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

  const removeGrocery = (id) => {
    setGroceries(groceries.filter( g => g.id !== id))
  }

  return (
    <>
      <GroceryForm />
      <GroceryList groceries={groceries} removeGrocery={removeGrocery} />
    </>
  )
}

export default App;
