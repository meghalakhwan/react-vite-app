/* eslint-disable react/prop-types */
//  ! ====== props ========
//  ?==== Receiving props ===

// let ChildComponent = props => {
//     console.log("I am ChildComponent");
//     console.log(props);

//     return(
//         <>
//         <h2>I am ChildComponent</h2>
//         <h3>Name : {props.sname}</h3>
//         <h3>Age: {props.age}</h3>
//         <h3>Course: {props.course}</h3>

//         </>
//     );
// };
// export default ChildComponent;

// // ? === Props Children =======
// let ChildComponent = (props) => {
//   console.log("I am ChildComponent");
//   console.log(props);

//   return (
//     <>
//       <h2>I am ChildComponent</h2>
//       <h3>Name: {props.name}</h3>
//       {props.children}
//     </>
//   );
// };
// export default ChildComponent;

// ? === props Destructuring ===
//  Example 1:
/*
let ChildComponent = props => {
  console.log(props);
  let { name, age, course } = props;
  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Course : {course}</h3>
    </>
  );
};
export default ChildComponent;
*/

// Example 2:

// let ChildComponent = props => {
//   console.log(props);
//   let {
//     sname,
//     course,
//     isMarried,
//     kidsCount,
//     gender,
//     skills: { frontend, database, backend },
//     hobbies: {
//       dayTimeHobbies: { publicHobies, privateHobies },
//       nightTimeHobbies: { parentKnows, parentDontKnows },
//     },
//     qualification: { matriculation, intermediate, graduation },
//   } = props;

//   return (
//     <>
//       <h2>I am ChildComponent</h2>
//       <h3>hobbies: {privateHobies}</h3>
//     </>
//   );
// };
// export default ChildComponent;

// ? Pure Javascript Data types
// let ChildComponent = props => {
//   console.log(props);

//   let{
//     sname,
//     age,
//     isPlaced,
//     companyName,
//     salary,
//     skills,
//     address,
//     dob,
//     clickFn,
//   } =props;

//   return (
//     <>
//     <h2>I am ChildComponent</h2>
//     <h3>Name: {sname}</h3>
//     <h3>Age: {age}</h3>
//     <h3>Placed Status: {isPlaced ? "YES": "no"}</h3>
//     <h3>
//       Comapny Name:
//       {companyName === undefined ? "Not Mentioned" : companyName}
//     </h3>
//     <h3>Salary: {salary === null ? 0 : salary}</h3>
//     <h3>
//       Skills:
//       {skills.map((val,ind) => {
//         return (
//           <div key= {ind}>
//             SK00 {ind + 1} - {val}
//           </div>
//         );
//       })}</h3>
//       <h3>Address :</h3>
//       <div>Street No: {address.streetno}</div>
//       <div>Colony: {address.colony}</div>
//       <div>Pincode : {address.pincode}</div>
//       <div>DOB: {dob.toString()}</div>
//       <button onClick={clickFn}>Click Here</button>
//       </>
//   );
// };

// export default ChildComponent;

// ? ======= props Drilling =========

// import GrandChildComponent from "./GrandChildComponent";

// let ChildComponent = props => {
//   console.log(props);
//   console.log("From ChildComponent -", props.products);

//   return (
//     <>
//     <h2>I am ChildCompoennt</h2>
//     <h2>
//       Link: <a href= {props.data}>Click Here</a></h2>
//       <GrandChildComponent d={props}/></>
//   );
// };
// export default ChildComponent;

// ? ========= prop types ==============

// 1. first step is installation
// 2. second step is by importing the variable.
/*import PropTypes from "prop-types";

let ChildComponent = props => {
  console.log(props);
  let { sname, course, skills } = props;
  return (
    <>
      <h2>I am ChildComponent </h2>
      <h3>Name : {sname}</h3>
      <h3>Course : {course}</h3>
      <h3>
        Skills :
        {skills.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })}
      </h3>
    </>
  );
};

ChildComponent.propTypes = {
  sname: PropTypes.string,
  age: PropTypes.number,
  course: PropTypes.string,
  skills: PropTypes.array,
  address: PropTypes.object,
  isMarried: PropTypes.bool,
};

export default ChildComponent;
*/

// ! =============== Task on Components , Props , CSS ===========

// import style from "./meeshoTask.module.css";

// let Product = (props) => {
//   console.log(props);
//   let { category, data } = props;
//   return (
//     <>
//       <h2>{category}</h2>

//       <section id={style.productsContainer}>
//         {data.map((val, ind) => {
//           console.log(ind, "----", val);

//           return(
//             // eslint-disable-next-line react/jsx-key
//             <article className={style.product}>
//               <div id={style.imagePart}>
//                 <img src={val.image} alt="" />
//               </div>
//               <div id={style.infoPart}>
//                 <div >{val.title}</div>
//                 <div>{val.price}</div>
//                 <div>free delivery</div>
//                 <div>
//                   <span>{val.ratings} | {val.reviews}</span>                 
//                 </div>
//               </div>
//             </article>
//           );
//         })}</section>
//     </>
//   );
// };

// export default Product;


// import React from "react";
import styles from "./FakeStoreApi.module.css"; // Renamed vn to styles for clarity

let ChildComponent = (props) => {
  console.log(props);
  return (
    <>
      <ul className={styles.productList}>
        {props.product.map((val) => {
          console.log(val);
          return (
            <li key={val.id} className={styles.productCard}>
              <section className={styles.imageContainer}>
                <img src={val.image} alt={val.title} />
              </section>
              <div className={styles.productInfo}>
                <h3>{val.title}</h3>
                <p style={{fontSize:"18px"}}><strong>Price:</strong> ${val.price}</p>
               {/* <p><strong style={{sDisplay:"flex",flexWrap:"wrap"}}>Description:</strong> {val.description}</p> */}
                <p><strong>Rating:</strong> {val.rating.rate} ⭐ ({val.rating.count} reviews)</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ChildComponent;


// ! ===========  Unmounting Phase   ===========

import React from "react";

class ChildCompoennt extends React.Component {
constructor(props){
super();
console.log(" I am Mounted ")
}

componentWillUnmount(){
  console.log("I am componentWillUnmount() method ")
}


render() {
  console.log("I am render method - childComponent");
  return <h1>I am ChildComponent</h1>
}
}

export default ChildCompoennt;