/* eslint-disable react/prop-types */

const Product = (props) => {
if(props.name === "bottle"){
    throw new Error("Sorry, Bottle is not a valid item.")
}

  return (
   <article style={{ border: "solid", height: "150px", width: "100px" }}>
    <div>{props.name}</div>
   </article>
  )
}

export default Product;
