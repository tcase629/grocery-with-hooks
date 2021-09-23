import Grocery from './Grocery';

const GroceryList = ({ groceries, removeGrocery }) => {

  return(
    <>
      {
        groceries.map( g => (
          <Grocery {...g} removeGrocery={removeGrocery} />
        ))
      }
    </>
  )
} 

export default GroceryList;