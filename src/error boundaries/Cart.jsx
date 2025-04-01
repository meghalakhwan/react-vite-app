import Product from "./Product"

const Cart = () => {
  return (
  
<section style={{border: "solid green", display: "flex", padding: "30px"}}>
    <h1>I am Cart One</h1>
    <Product name = "pen"/>
    <Product name="pencil"/>
    <Product name="erasor"/>
    <Product name="sharpner"/>
</section>

  )
}

export default Cart;
