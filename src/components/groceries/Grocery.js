import GroceryForm from "./GroceryForm";
import { useState } from 'react';
const Grocery = ({ id, item, complete, price, removeGrocery, updateGrocery }) => {
  const [ editing, setEditing] = useState(false)
  return(
    <>
      <h1>{item}</h1>
      <p>${price}</p>
      {
        editing ?
        <>
          <GroceryForm 
            id={id}
            item={item}
            price={price}
            updateGrocery={updateGrocery}
            setEditing={setEditing}
          />
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>  
        :
        <button onClick={() => setEditing(true)}>Edit</button>
      }
      <button onClick={() => removeGrocery(id)}>Delete</button>
    </>
  )
}

export default Grocery;