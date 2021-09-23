import { useState, useEffect } from 'react';
const GroceryForm = ({ addGrocery, id, item, price, updateGrocery, setEditing }) => {
  const [grocery, setGrocery] = useState({ item: "", price: "" })
  
  useEffect( () => {
    if (id) {
      setGrocery ({ item, price })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateGrocery(id, grocery)
      setEditing(false)
    } else {
      addGrocery(grocery)
    }
    setGrocery({ item: "", price: "" })
  }
  
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="item" 
          value={grocery.item}
          onChange={(e) => setGrocery({...grocery, item: e.target.value})}

          placeholder="Grocery Item"
          required
        />
        <input
          name="price" 
          value={grocery.price}
          onChange={(e) => setGrocery({...grocery, price: e.target.value})}

          placeholder="Price"
          required
        />
        <button>Add Item</button>
      </form>
    </>
  )
}

export default GroceryForm;