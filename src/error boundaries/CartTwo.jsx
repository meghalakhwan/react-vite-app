// ! =============== Error Boundaries ================

// ? Using CBC
/*
import Product from "./Product";
import ErrorBoundary from "./ErrorBoundary";
const CartTwo = () => {
  return (
    <>
    <section style={{ border: "solid blue", display: "flex", padding: "30px" }}>
      <h1>I am Cart Two</h1>
        <ErrorBoundary>
    <Product name = "compass"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Product name="divider"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Product name="bottle"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Product name="scale"/>
    </ErrorBoundary>
    </section>
    </>
  )
}

export default CartTwo

? Using react-error-boundary library

~ Example 1: uing fallback prop

import Product from "./Product";
import { ErrorBoundary } from "react-error-boundary";

const CartTwo = () => {
  return (
   <section>
    <h1>I am Cart Two</h1>
    <ErrorBoundary fallback={<h1>Something Went Wrong</h1>}>
    <Product name = "compass"/>
    </ErrorBoundary>
    <ErrorBoundary fallback={<h1>Something Went Wrong</h1>}>
    <Product name="divider"/>
    </ErrorBoundary>
    <ErrorBoundary fallback={<h1>Something Went Wrong</h1>}>
    <Product name="bottle"/>
    </ErrorBoundary>
    <ErrorBoundary fallback={<h1>Something Went Wrong</h1>}>
    <Product name="scale"/>
    </ErrorBoundary>
   </section>
  )
}

export default CartTwo

*/

//~ Example 2: using fallback prop


import Product from "./Product";
import { ErrorBoundary } from "react-error-boundary";

const CartTwo = () => {
  function fallback_render({error}){
    console.log("I am from fallback render");
    return(
      <div>
        <h1>Something went Wrong</h1>
        <p>{error.message}</p>
      </div>
    )
  }
  return (
    <section style={{ border: "solid blue", display: "flex", padding: "30px" }}>
    <h1>I am Cart Two</h1>
    <ErrorBoundary fallbackRender={fallback_render}>
      <Product name="Compass" />
    </ErrorBoundary>

    <ErrorBoundary fallbackRender={fallback_render}>
      <Product name="divider" />
    </ErrorBoundary>

    <ErrorBoundary fallbackRender={fallback_render}>
      <Product name="bottle" />
    </ErrorBoundary>

    <ErrorBoundary fallbackRender={fallback_render}>
      <Product name="scale" />
    </ErrorBoundary>
  </section>
  )
}

export default CartTwo;

