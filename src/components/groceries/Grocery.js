import GroceryForm from "./GroceryForm";
import { useState } from 'react';
const Grocery = ({ id, item, complete, price, removeGrocery, updateGrocery, groceryClick }) => {
  const [ editing, setEditing] = useState(false)
  return(
    <>
      <h3
        style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery}
        onClick={ () => groceryClick(id) }
      >
        {item}
      </h3> 
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

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'red', textDecoration: 'line-through' }
};


export default Grocery;