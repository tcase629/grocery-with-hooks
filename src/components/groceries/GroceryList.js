import Grocery from './Grocery';

const GroceryList = ({ groceries, removeGrocery, updateGrocery, groceryClick }) => {

  return(
    <>
      {
        groceries.map( g => (
          <Grocery 
          {...g} 
          removeGrocery={removeGrocery} 
          updateGrocery={updateGrocery}  
          groceryClick={groceryClick}
          />
        ))
      }
    </>
  )
} 

export default GroceryList;