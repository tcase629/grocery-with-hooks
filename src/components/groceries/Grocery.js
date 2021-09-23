
const Grocery = ({ id, item, complete, price, removeGrocery }) => {

  return(
    <>
      <h1>{item}</h1>
      <p>${price}</p>
      <button>Edit</button>
      <button onClick={() => removeGrocery(id)}>Delete</button>
    </>
  )
}

export default Grocery;