import Grocery from './Grocery';

const GroceryList = ({ groceries, removeGrocery, updateGrocery }) => {

  return(
    <>
      {
        groceries.map( g => (
          <Grocery 
          {...g} 
          removeGrocery={removeGrocery} 
          updateGrocery={updateGrocery}  
          />
        ))
      }
    </>
  )
} 

export default GroceryList;