import { useState } from 'react';
const GroceryForm = ({}) => {
  const [grocery, setGrocery] = useState({ item: "", price: "" })
  
  const handleSubmit = (e) => {

  }
  
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input
          name 
          value
          onChange
        />
      </form>
    </>
  )
}

export default GroceryForm;