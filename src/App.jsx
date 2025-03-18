// ! =============== component ===============
/*
Component is block of code
Rules:
    1. Component Name should starts with uppercase.
        Ex: App.jsx , Product.jsx , Card.jsx
    2. Component can be saved with .jsx or .js extension.
    3. To use this component in other components we have to use an element
       Ex: <App> </App>
       Ex: <App />

Components are classified into 2 ways
1. Class based Component
2. Function based compoent
*/

// ? ======= Class based Components =============
/*
import { Component } from "react";

class App extends Component {
  render() {
    console.log("Hii Hello how are you????");
    return <h1>Hello , I am Class Based Component</h1>;
  }
}
export default App;
*/

// ? ======= Function based Components =============
// & Case 1:
/*
function App() {
  return <h1>Hii, I am Function based Component</h1>;
}
export default App;
*/

// & Case 2:
/*
export default function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
}
*/

// & Case 2.1:
/*
let App = function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
};
export default App;
*/

// & Case 3:
/*
export default () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
*/

// & Case 3.1:
/*
let App = () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
export default App;
*/

// & Case 4:
// we should not return more than one element.
// so we have to keep all our elements in one parent element.
/*
let App = () => {
  console.log("Heyy I am arrow function...");
    return (
      <div>
        <h1>Hii, I am function based component (Arrow function)</h1>
        <h2>Bye, I am function based component (Arrow function)</h2>
      </div>
    );
};
export default App;
*/

// & Case 5:
// In the above an unwanted div is created
// to avoid we can use React.Fragment
// React.Fragment in one empty element.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <React.Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </React.Fragment>
  );
};
export default App;
*/

// & Case 5.1 :
/*
import { Fragment } from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </Fragment>
  );
};
export default App;
*/

// & Case 5.2:
// We can use <React.Fragment></React.Fragment> as <></>.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </>
  );
};
export default App;
*/

// ! ================ JSX ==================

/* 
JSX stands for JavaScript XML.
JSX looks similar to HTML but stricter than HTML.
It follow some rules.
*/

// ?  Rule 1:
//  JSX will return only one element
// we can use one parent element /Fragment.

/*let  App = () => {
    return (
      <>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>

      </>
    );
  };
  export default App;
*/

// ?  Rule 2:
//  JSX elements are case sensitive

/* let App = ()=>{
console.log("I ama component");
return <H1> I am a Component</H1>
};

export default App;
*/
//? Rule 3:
//If we want we can use js variable into html by using expression

//js --- html =====> return
// html ---- js =====> {}

//? Rule 4:
// Every element shoulf=d be unique.
// for unique reference we have to use key prop.

/*let App = () => {
    let sname = "keshav";
    let age = 20;
    let course = "React JS";
    let skills = ["html", "css", "js", "react js", "tailwind CSS"]
    console.log(sname);
    console.log(age);
    console.log(course);

    return (
        <>
        <h1>I am {sname}</h1>
        <h1>My age is {age}</h1>
        <h1>I opted for {course}</h1>
        My skills are:
        (Skills.map((val, ind) => {
            console.log(val); //items
            console.log(ind); //indexes
            return (
                <li key ={ind} type = "circle">
                    {val}
                </li>
            );
        }))

        </>
    );
};

export default App;
*/
// ? Rule 5:
//JSX follows lowercamel case conventions
//Ex: onClick, onMouseOver

// ? Rule 6:
// common words from html and javascript will change in jsx.
// ex: class---> className, for ---> htmlFor

// ? Rule 7:
//All elements should be closed.
// ex: <input type="text" /> or <input type = "text"></input>

/*let App = ()=> {
    let sname = "shivani";
    return(
        <>
        <h1>I am acomponent</h1>
        <h1>I am {sname}</h1>
        <button onClick={() => confirm ("Do you want to click")}>
            Click Here
        </button>

         <button
         onMouseOver={()=>{
            console.log("you hover on this button");
         }}>
            Mouse Over
         </button>

         <form>
            <label htmlFor="">User Name:</label>
            <input type="text" name="" id="" /> <br /> <br />
            <label htmlFor="">User Email:</label>
            <input type="text" />
            <br /> <br />
            <hr /> <hr />

            <section id="mainContainer">
                <div className="demo"> item 1</div>
                <div className="demo"> item 2</div>
                <div className="demo"> item 3</div>
                <div className="demo"> item 4</div>
            </section>
         </form>
        </>
    )
}
*/
// ! ============ props========
/*  Inshort we callproperties as props.
props are used to share the data from one component to another component.*/

//  ===== Passing props ===
/*import ChildComponent from "./ChildComponent";

let App = () => {
    console.log("I am App Component");

    return (
        <>
        <h1>I am App Component</h1>
        <ChildComponent sname ="shivani" age={20} course="React JS"></ChildComponent>
        <ChildComponent sname ="Tanmay" age={22} course="Node JS"></ChildComponent>
        <ChildComponent sname ="Ekansh" age={23} course="All Courses"></ChildComponent>
        <ChildComponent sname ="Nazme" age={22} course="No Courses"></ChildComponent>

        </>
    );
};

export default App;
*/

// ! == Props Children =========
/*It is the way of sharing JSX elements from one acomponent to another component.

import ChildComponent from "./ChildComponent";
let App = () => {
        console.log("I am App Component");

        return (
            <>
            <h1>I am App Component</h1>
            <ChildComponent name = "keshav">
                <h3>I am child -1</h3>
                <h3>I am child -2</h3>
                <h3>I am child -3</h3>
            </ChildComponent>

            <ChildComponent name = "shubham">
                <h3>I am child 2.1</h3>
                <h3>I am child 2.2</h3>
                <h3>I am child 2.3</h3>
            </ChildComponent>

        </>
    );
};

export default App;*/

// ? === props Destructuring ===
// & Example 1:
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent name="Ekansh" age={20} course="React JS" />
      <ChildComponent name="Prabal" age={22} course="Node JS" />
      <ChildComponent name="Shivani" age={22} course="Express JS" />
    </>
  );
};
export default App;
*/

// & Example 2:
/*import ChildComponent from "./ChildComponent";
let App = () => {
  let sname = "Nazme";
  let course = "React JS";
  let isMarried = true;
  let kidsCount = null;
  let gender = "Male";

  let skills = {
    frontend: ["html", "css", "js", "Reactjs"],
    database: ["sql", "plsql", "mongodb"],
    backend: ["pythoooonnn", "jooovaaa", "jovaScript", "Djangoooooo"],
  };

  let hobbies = {
    dayTimeHobbies: {
      publicHobies: "Reading",
      privateHobies: "Snatching",
    },
    nightTimeHobbies: {
      parentKnows: "Marvals",
      parentDontKnows: "betting",
    },
  };

  let qualification = {
    matriculation: 85,
    intermediate: 82,
    graduation: 85,
  };

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={sname}
        course={course}
        isMarried={isMarried}
        kidsCount={kidsCount}
        gender={gender}
        skills={skills}
        hobbies={hobbies}
        qualification={qualification}
      />
    </>
  );
};
export default App;
*/

// ?========= Default Props ==========

/*import ChildComponent from "./ChildComponent";
let App = () => {

  return (
    <>
    <h1>I am App Component</h1>
    <ChildComponent
    sname = "Amit"
    age={20}
    course="React Js"
    skills={["HTML", "CSS", "JS", "React JS", "Node JS"]}
    friend={{fname:"Sumit", address: "karol bagh", mobile: 23456789}}/>

    <ChildComponent
    sname = "keshav"
    age={22}
    course="node js"
    skills={["HTML", "CSS", "JS", "React JS", "Node JS"]}
    friend={{fname:"Sumit", address: "karol bagh", mobile: 23456789}}/>

  <ChildComponent sname="Ekansh" age ={21}/>
  <ChildComponent  skills={["HTML", "CSS", "JS", "React JS", "Node JS"]} />
<ChildComponent
friend={{
  fname:"megha",
  address:"kirti nagar",
  mobile:888456790,
}}
/>
</>
  );
};
export default App
*/ //? Pure Javascript Data types
/*Pure javascript data types we are unable to display on the UI
Allowed= string, number
Not Allowed - boolean, undefined, null, array, object, date, function

import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
    <h1>I am App Comonent</h1>
    <ChildComponent
    sname= "Prabal"
    age={23}
    isPlaced = {false}
    companyName= {undefined}
    salary={null}
    skills={["html", "css", "js", "reactjs", "mongodb"]}
    address={{streetno: 123, colony:"patel nagar", pincode: 110041}}
      dob={new Date("01 05 2000 10:50:50")}
      clickFn= {()=> {
        console.log("You clicked the function");
      }}
    />
    </>
  );
};

export default App;
*/

// ? ==== props Drilling ======
/*
It is a pocess of sharing the data from one component to another component to another component and so on.
It is process of sharing b/w the compoents through multiple levels. 


import ChildComponent from "./ChildComponent";
let App = () => {
  let myData = "https://www.qspiders.com/";

  let products = [
    [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 500
        }
      },
      {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.1,
          "count": 430
        }
      },
      {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 4.6,
          "count": 400
        }
      },
      {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 70
        }
      },
      {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3,
          "count": 400
        }
      },
      {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 1.9,
          "count": 100
        }
      },
      {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
          "rate": 3.3,
          "count": 203
        }
      },
      {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 470
        }
      },
      {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 319
        }
      },
      {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 400
        }
      },
      {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 250
        }
      },
      {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.2,
          "count": 140
        }
      },
      {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
          "rate": 2.6,
          "count": 235
        }
      },
      {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 340
        }
      },
      {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
          "rate": 3.8,
          "count": 679
        }
      },
      {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
      {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.5,
          "count": 146
        }
      },
      {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      }
    ]
  ];

 console.log("From App - ", products);

 return (
  <>
  <h1>I am App Componnt</h1>
  <h1>
    Link: <a href={myData}>Click Here</a></h1>
    <ChildComponent data={myData} products= {products} />
    </>
 )
}

export default App;
*/
// ? =========  prop types ==============

/*import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={789553}
        age={20}
        course="MERN stack"
        skills="hello"
        address={{
          streetno: 123,
          colony: "patel nagar",
          pincode: 123456,
        }}
        isMarried={false}
      />
    </>
  );
};
export default App;
*/
// ! CSS IN REACT

// ? ============ INLINE CSS =========

/*
1. Inline CSS is similar to traditional css but the only difference is it accepts objects as a value.
2. css properties will follows camel case conventions. */

// & Case 1:

/*let App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>I am App Component - Inline CSS</h1>
      <section
        style={{
          border: "2px solid",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "teal",
          color: "white",
        }}
      >
         <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Home</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>About</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Contact</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Services</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Login</div>
      </section>
    </>
  );
};

export default App;
*/

// & Case 2:

/* let App =() => {
  let sectionStyles ={
    border: "2px solid",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "teal",
    color: "white",
  };

  let divStyles ={
    border: "solid white",
    flex: 1,
    padding: "10px",
    textAlign: "center"
  };

  return(
    <>
      <h1 style={{textAlign: "center", color: "blue"}}>
        I am App component - Inline CSS
      </h1>
      <section style={sectionStyles}>
        <div style={divStyles}>About</div>
        <div style={divStyles}>Contact</div>
        <div style={divStyles}>Services</div>
        <div style={divStyles}>Home</div>
        <div style={divStyles}>Login</div>
      </section>
    </>
  );
};
export default App;
*/

// ? ==========  MODULE CSS ===========
/* we have to create a file like filename.module.css
2. import into the component
3. for elements css properties will apply directly to assign id names/ class names we have to use variabl name which we imported with.

import style from "./apps.module.css";
let App =() => {
  console.log(style);
  return(
    <>
    <h1>I am App Component - Module CSS</h1>
    <section id="style.container">
      <div className={style.items}>Home</div>
      <div className={style.items}>About</div>
      <div className={style.items}>Contact</div>
      <div className={style.items}>Services</div>
      <div className={style.items}>Login</div>
      </section></>
  )
}

export default App;
*/

// ?===========  GLOBAL CSS =========

// let App=()=>
//  {
// return(<>
//  <h1>
//     I am App Component -Global CSS
// </h1>
// <section id="container"
// >
//     <div className="items">Home</div>
//     <div className="items">About</div>
//     <div className="items" >Contact</div>
//     <div className="items" >Services</div>
//     <div className="items">Login</div>
// </section>
// </>)
// }

// export default App;

// ! =========== Task on Components, props , CSS =============

// import assestsData from "./assets/assests";
// import Product from "./ChildComponent";
// import style from "./meeshoTask.module.css";

// let App = () => {
//   console.log(assestsData);
//   console.log(assestsData.meeshoTask);
//   console.log(assestsData.meeshoTask.mensData);

//   return(
//     <>
//     <h1 id={style.mainTitle}>Welcome to Meesho</h1>

//     <Product
//     category="Men's Collection"
//     data={assestsData.meeshoTask.womensData}
//     />
//     <Product
//     category="Women's Collection"
//     data={assestsData.meeshoTask.mensData}
//     />

//     <Product
//     category="kid's Collection"
//     data={assestsData.meeshoTask.kidsData}
//     />

//     <Product
//     category="Watches Collection"
//     data={assestsData.meeshoTask.watchesData}
//     />

//     <Product
//     category="Footwear's Collection"
//     data={assestsData.meeshoTask.footwearData}
//     />
//     </>
//   );
// };

// export default App;

// ! ==============  Task on hooks ==============

// import "react";
// import { useState } from "react";
// import Asset from "./Assests/Assets";
// import ChildComponent from "./ChildComponent";
// import vn from "./FakeStoreApi.module.css"

//  let App=()=>
//  {
// console.log(Asset.FakeStoreApi)
// let product=Asset.FakeStoreApi.product;
// let [data,setData]=useState(product);

// let HandleAllItem=()=>
// {
// setData(product);
// }
// let HandleMen=()=>
// {
//     let MenItem=[];
//     product.map((val,_ind)=>
//     {
//         if(val.category==="men's clothing")
//         {
//             console.log(MenItem)
//             MenItem.push(val);
//         }
//     })
// setData(MenItem);
// }

// let HandleWoMen=()=>
// {
//     let WOMenItem=[];
//     product.map((val,ind)=>
//     {
//         if(val.category==="women's clothing")
//         {
//             console.log(WOMenItem)
//             WOMenItem.push(val);
//         }
//     })
// setData(WOMenItem);
// }

// let HandleJewellery=()=>
// {
//     let Jewel=[];
//     product.map((val,ind)=>
//     {
//         if(val.category==="jewelery")
//         {
//             console.log(Jewel)
//             Jewel.push(val);
//         }
//     })
// setData(Jewel);
// }
// let HandleElectronic=()=>
// {
//     let Electronic=[];
//     product.map((val,ind)=>
//     {
//         if(val.category==="electronics")
//         {
//             console.log(Electronic)
//             Electronic.push(val);
//         }
//     })
// setData(Electronic);
// }
// return(<>
// <center><h1>Fake Store API Task</h1>
// <button onClick={HandleAllItem} style={{backgroundColor:"green" ,color:"white",width:"100px",height:"50px",marginLeft:"50px",border:"1px solid white",borderRadius:"20px"}}>All Items</button>
// <button onClick={HandleMen} style={{backgroundColor:"green" ,color:"white",width:"100px",height:"50px",marginLeft:"50px",border:"1px solid white",borderRadius:"20px"}}>Mens Collection</button>
// <button onClick={HandleWoMen} style={{backgroundColor:"green" ,color:"white",width:"100px",height:"50px",marginLeft:"50px",border:"1px solid white",borderRadius:"20px"}}>Women Collects</button>
// <button onClick={HandleJewellery} style={{backgroundColor:"green" ,color:"white",width:"100px",height:"50px",marginLeft:"50px",border:"1px solid white",borderRadius:"20px"}}>Jewellery</button>
// <button onClick={HandleElectronic} style={{backgroundColor:"green" ,color:"white",width:"100px",height:"50px",marginLeft:"50px",border:"1px solid white",borderRadius:"20px"}}>Electronics</button>
// </center><ChildComponent product={data}></ChildComponent>

// </>)

//  }

//  export default App;

// ! ===========   Context API ===============

// import { createContext } from "react";
// import ChildComponentA from "./ChildComponentA";
// import ChildComponentB from "./ChildComponentB";
// import Asset from "./Assests/assests";
// import QspidersComponent from "./ContextApi Task/QspidersComponent";

// ? Step 1

// export let MyContext = createContext();
// let App = () => {
//   let data = Asset.FakeStoreApi.product;
//   return (
//     <>
//       <h1>I am Child Component</h1>
//       {/* //? step2 */}

//       <MyContext.Provider value={data}>
//         <ChildComponentA></ChildComponentA>
//         <ChildComponentB></ChildComponentB>
//       </MyContext.Provider>
//     </>
//   );
// };

// export default App;

// ! =============== Task on Context API ===============================

// import React from 'react'
// import QspidersComponent from "./ContextApi Task/QspidersComponent";

// let App = () => {
//   return (
//    <>
//    <h1>I am App Component</h1>
//    <br />
//    <hr />
//    <QspidersComponent></QspidersComponent>
//    </>
//   )
// }

// export default App;

// ! ==================== Higher Order Components =========

// import React from "react";
// import ChildComponentA from "./ChildComponentA";
// import ChildComponentB from "./ChildComponentB";
// let App =() =>{
//   return(
//     <>
//     <h1>I am App Component</h1>
//     <ChildComponentA id="A101"/>
//     <ChildComponentB id="B305"/>

//     </>
//   )
// }

// export default App;

// ! =================== Task on higher order components ==================

// import ChildComponentA from "./ChildComponentA";
// import ChildComponentB from "./ChildComponentB";

// let App = () => {
//   return (
//     <>
//       <div>
//         <ChildComponentA/>
//         <ChildComponentB/>
//       </div>
//     </>
//   );
// };

// export default App;

// ? =========================  using if-else ================
/*
1. if, if-else, else-if, switch
2. ternary operator
3. short circuit operator(LOGICAL AND)
syntax: condition && dataToDisplay

*/

// ? ============  using if-else =========
// 1. if-else statement we should not use inside return statement.

/*import React, {useState} from "react";

const App = ()=>{

  let[counter,setCounter] =useState(0);
  console.log(counter);

  if(counter % 2 ===0){
    return (
      <>
      <h1>I am App Component</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={()=> setCounter(counter+1)}>Update</button>
      <h2>Status: Even number</h2>
      </>
    )
  }

  else{
    return(<>
    <h1>I am App Component</h1>
    <h2>Counter: {counter}</h2>
    <button onClick={()=> setCounter(counter+1)}>Update</button>
    <h2>Status: Odd Number</h2>
    
    </>)
  };
};

export default App;

*/

// ? ==================  using else if ===========
/*import React, { useState } from "react";

const App = () => {
  let [number, setNumber] = useState(0);

  if (number % 2 === 0) {
    return (
      <>
        <h1>Number: {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Update Number</button>

        <pre>Status: Number divisible by 2</pre>
      </>
    );
  } else if (number % 3 === 0) {
    return (
      <>
        <h1>Number: {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Update Number</button>
        <pre>Status: Number divisible by 3</pre>
      </>
    );
  } else if (number % 4 === 0) {
    return (
      <>
        <h1>Number: {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Update Number</button>
        <pre>Status: Number divisible by 4</pre>
      </>
    );
  }

  else{
    return(
      <>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Update Number</button>
      <pre>Status: Number divisible by 1</pre>
      </>
    )
  }
};
export default App;



// ? ============ Using Ternery Operator ============
/*
import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>I am App Component</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
      <h2>Status : {counter % 2 === 0 ? "Even" : "Odd"} Number</h2>
    </>
  );
};

export default App;
*/

// ? =========== Logical AND Operator =========

// import React, { useState } from "react";

// const App = () => {
//   let [status, setStatus] = useState(true);

//   return (
//     <>
//       <h1>I am App Component</h1>

//       <button onClick={() => setStatus(true)}>Placed</button>
//       <button onClick={() => setStatus(false)}>Not Placed</button>
//       <h2>Status: {status ? "Placed" : "Not Placed"} </h2>
//       <h2>Status : {status && "Placed"}</h2>
//     </>
//   );
// };

// export default App;

// ? ======   Example 1   =============

// import React from "react";

// const App = ()=>{
// let Students = [
//   {sname: "Ekansh", isPlaced: false},
//   {sname: "Amit", isPlaced: true},
//   {sname: "prabal", isPlaced: true},
//   {sname: "Mihir", isPlaced: true},
//   {sname: "megha", isPlaced: true},
//   {sname: "Prabal", isPlaced: false},
//   {sname: "Keshav", isPlaced: false},
//   {sname: "kanishka", isPlaced: true},
// ];

// return(
// <>
// <h1>Students Details:</h1>
// { Students.map((val,ind) => {
// console.log(val, ind);

// return(
// <p>
// {val.sname} { val.isPlaced ? "✅" : "❌"};
// </p>
// );
// })
// }
// </>
// )}

// export default App;
// */

// ? =============  Example 2 ==========

// import React from "react";
// import {useState} from "react";

// const App = () => {
// let[toggle, setToggle] = useState(false);

// return(
// <>
// <h1>Welcome to Ekansh show</h1>

// <article>
// {toggle ? (
// <i className="fa-solid fa-toggle-on" onClick=(() => setToggle(false)}> </i>

// </article>

// </>

// )

// }

// ! ============ Task ================

/*import React, { use, useState } from 'react'
import style from "./apps.module.css";

const App = () => {

  let[toggle, setToggle] = useState(false);
  return (
    <>
      <h1>Hello Megha</h1>
      <section className='sidebar-menu'>
      <article className='menu-icon'>
        {toggle ? (<i className="fa-solid fa-sliders" onClick={() => setToggle(false)}></i>) : (<i className="fa-solid fa-sliders" onClick={() => setToggle(true)}></i>)}
        <h5><i className="fa-solid fa-plus"></i>{toggle && <span>New Chat</span>}</h5>
    </article>       
       <ul>
        <li><i className="fa-regular fa-gem"></i>{toggle && <span>Gem Manager</span>}</li>
        <li><i className="fa-solid fa-question"></i>{toggle && <span>Help</span>}</li>
        <li><i className="fa-solid fa-clock-rotate-left"></i>{toggle && <span>Activity</span>}</li>
        <li><i className="fa-solid fa-gear"></i>{toggle && <span>settings</span>}</li>
        </ul>
li     </section> 
         </>
    
  )

}
export default App;
*/

// ! ========================  Forms in React JS =================

// ?================ Example 2: ============

/*import React from "react";
import { useState } from "react";

const App = () => {
  let [number1, setNumber1] = useState("");
  let [number2, setNumber2] = useState("");
  let [number3, setNumber3] = useState("");
  let [result, setResult] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let sum = Number(number1) + number2 * 1 + +number3;
    setResult(sum);
  };

  return (
    <>
      <h1>Addition of 3 Numbers</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Number 1:</label>
          <input
            type="text"
            value={number1}
            onChange={(e) => {
              setNumber1(e.target.value);
            }}
          />
        </p>

        <p>
          <label>Number 2:</label>
          <input
            type="text"
            value={number2}
            onChange={(e) => {
              setNumber2(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Number 3:</label>
          <input
            type="text"
            value={number3}
            onChange={(e) => {
              setNumber3(e.target.value);
            }}
          />
        </p>
        <p>
          <button>Submit</button>
        </p>

        {result && <h1>Output: {result}</h1>}
      </form>
    </>
  );

};

export default App;
*/

//  ?  Example 3:

/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({
    sname: "Megha",
    email: "m@gmail.com",
    mobile: "2345677890",
  });

  console.log(formData);

  let handleName = (e) => {
    console.log("I am changing Name");
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);

    setFormData({
      ...formData,
      sname: e.target.value,
    });
  };

  let handleEmail = (e) => {
    console.log("I am changing Email");
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);

    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  let handleMobile = (e) => {
    console.log("I am changing Name");
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);

    setFormData({
      ...formData,
      mobile: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);
  };

  return (
    <>
      <h1>My form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name:</label>
          <input type="text" value={formData.sname} onChange={handleName} />
        </p>
        <p>
          <label>Email:</label>
          <input type="text" value={formData.email} onChange={handleEmail} />
        </p>
        <p>
          <label>Mobile No:</label>
          <input type="text" value={formData.sname} onChange={handleMobile} />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
};
export default App;

*/

// ? Example 3.1

/*import React from "react";
import { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({
    sname: "",
    email: "",
    mobile: "",
  });

  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);

    return (
      <>
        <h1>My form</h1>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Name :</label>
            <input
              type="text"
              name="sname"
              value={formData.sname}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Email :</label>
            <input
              type="text"
              name="sname"
              value={formData.email}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Mobile No:</label>
            <input
              type="text"
              name="sname"
              value={formData.sname}
              onChange={handleChange}
            />
          </p>
        </form>
      </>
    );
  };
};

*/

// ! ==============   Life Cycle Methods of a component  ================

// ? Example 1:
/*
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor

    this.state = {
      counter: 0,
    };

    console.log(this); // current Component
    console.log(this.state);
    console.log(this["state"]);
  }

  render() {
    console.log("I am Class based App Component");

    return (
      <>
        <h1>I am App Component</h1>
        <h2>Count : {this.state.counter}</h2>
        <button>Decrement</button>
        <button>Reset</button>
        <button
          onClick={() => {
            console.log("Increment button clicked...");
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Increment
        </button>
      </>
    );
  }
}
export default App;
*/

// ? Example 2:
/*
import React from "react";

class App extends React.Component {
  constructor(props) {
    console.log("I am constructor method");
    super(props);

    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };
  }

  render() {
    console.log("I am render method");

    return (
      <center>
        <h1>I am App Component</h1>
        <h2>Counter1 : {this.state.counter1}</h2>
        <button onClick={()=> this.setState({ ...this.state,  counter1: this.state.counter1 - 1})}>Decrement</button>
        <button onClick={()=> this.setState({ ...this.state, counter1: 0})}>Reset</button>
        <button onClick={() => this.setState({...this.state, counter1: this.state.counter1 + 1 })}>Increment</button>
        
        <h2>Counter2 : {this.state.counter2}</h2>
        <button onClick={()=> this.setState({counter2: this.state.counter2 - 1})}>Decrement</button>
        <button onClick={()=> this.setState({counter2: 0})}>Reset</button>
        <button onClick={() => this.setState({ counter2: this.state.counter2 + 1 })}>Increment</button>
        
        <h2>Counter3 : {this.state.counter3}</h2>
        <button onClick={()=> this.setState({counter3: this.state.counter3 - 1})}>Decrement</button>
        <button onClick={()=> this.setState({counter3: 0})}>Reset</button>
        <button onClick={()=> this.setState({counter3: this.state.counter3 + 1})}>Increment</button>
      </center>
    );

  }
}
export default App;
*/

// ! ================ Mouting Phase =====================
/*
  Whenever a component is created and inserted into the DOM is called Mounting Phase.
  ? 1. Constructor()
    a. It is the first method to be called in Mounting Phase
    b. This method will execute only once after the component Mounted.
    c. It is the best place to do initializations.
    d. To use "this" keyword,
        i. firstly, we have to extend the features of React.Component
        ii. we have to pass props as parameter to constructor method
        iii. we must use super call.
        iv. "this" keyword will points to the current component.
    e. By default CBC contains state data. 
    f. To create state data, this.state = object;
    g. To udpate the state data, this.setState(new state obj)

  ? 2. getDerivedStateFromProps():
    a. getDerivedStateFromProps() method should be static.
    b. It will execute just before the render() method.
    c. It will return the new state data. 
    d. it accepts prev props, prevsate as a paramters.
    e. It must and should return a valid state object / null.

  ? 3. render()
    a. It is the only mandatory method in CBC's,
    b. It will execute for each and every updates.
    c. render() method allows us to write JSX(html + js);
    d. It is not the best place to do side effects
    e. side effects means the things which are not in react
        ex: fetch , timers, window properties, etc.
  
  ? 4. componentDidMount():
    a. componentDidMount() method will work only once after the component is mounted.
    b. This is the best place to perform side effects
    c. prefered to make GET requests here.
*/

// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     console.log("I am constructor() method");
//     super(props);

//     this.state = { counter: 0 };
//     console.log(this.state);
//   }

//   static getDerivedStateFromProps(prevProps, prevState) {
//     console.log("I am getDerivedStateFromProps() method");

//     // return newStateValue;
//     console.log(prevState);
//     // return { counter: 50 };
//     return null;
//   }

//   componentDidMount() {
//     console.log("I a componentDidMount() Method");

//     let getData = async () => {
//       let res = await fetch("https://fakestoreapi.com/products");
//       let data = await res.json();
//       console.log(data);
//     };

//     getData();
//   }

//   render() {
//     console.log("I am render() method");
//     console.log(this.state);

//     return (
//       <>
//         <h1>I am App Component</h1>
//         <h2>Counter : {this.state.counter}</h2>
//         <button
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >
//           Update
//         </button>
//       </>
//     );
//   }
// }

// export default App;

// !  ==========  Updating Phase ===================

/* Whenever there some changes in copmonent, react will re-render the component and this phase is called updating phase.
chnages in props, state.

? 1. getDerivedStateFromProps():
  This method is as same in Mounting phase.
  This method will execute just before the render method.
  It will provide the static state data.
  It will return a new object as state data.

? 2. shouldComponentUpdate(): 
  This method helps us to improve the performane of an application.
  It will compare the pevious props/states with current props/states.
  It will return a boolean value.
  If true, render() method will execute.
  If false, render() method will not execute
  By default the value is true.


*/

/*class App extends React.component {
  constructor(props) {
    console.log("I am constructor() method");
    super(props);

    this.state = { counter: 0 };
  }

  static getDerivedStateFromProps(prevProps, prevState){
    console.log("I am getDerivedStateFromProps() method");

    return null;
  }

  shouldComponentUpdate(prevProps, prevState){
    console.log("I am shouldComponentUpdate() method")
  
  return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("I am  getSnapshotBeforeUpdate() method")
  
  return prevState
  };

  componentDidUpdate(props, state,snapshot){
    console.log(" I am componentDidUpdate() method")
    console.log("My snap data is -", snapshot)

  }
  componentDidMount(){
    console.log("I am componentDidMount() method");

    let getData = async()=>{
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
    }
  }
}

export default App;


// ! ===================  Unmounting Phase =====================

import React from "react";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  constructor(props){
    console.log("I am constructor method");
    super(props);

    this.state = {counter: 0, isDisplay: true};
  }

  render(){
    console.log(" I am render() method - App Component")

    return(
      <>
      <h1>I am App Component</h1>
      <h2>Counter: {this.state.counter}</h2>
      <button onClick={()=> this.setState({counter: this.state.counter + 1})}>Update</button>
      <button onClick={()=> this.setState({counter: this.state.isDisplay})}>Toggle</button>     
      </>
    )
  }
}

*/

// ! ============================ useEffect() Hook =====================
/*
1. useEffect() is a hook in react which helps to peerform side effects.
2. useEffect() is an alternative to componentDidMount() , componentDidUpdate() and componentWillUnMount() methods of class based components.
*/

// import React, { useState } from "react";
// import { useEffect } from "react";
// import ChildComponent from "./ChildComponent";

// const App = () => {
//   // console.log("I am App Component");
//   let [counter1, setCounter1] = useState(0);
//   let [counter2, setCounter2] = useState(0);
//   let [isDisplay, setDisplay] = useState(true);

// ? Case 1:
// useEffect Hook without dependecny array will work for every changes.
/*
  useEffect(() => {
    console.log("I am useEffect() Hook");
    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  });
  */

// ? Case 2:
// useEffect Hook with dependency array will work only once.
// It will act as componentDidMount() method.
/*
  useEffect(() => {
    console.log("I am useEffect() Hook working as componentDidMount() method.");
    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, []);
  */

// ? Case 3:
// useEffect Hook with dependency array including state variables will work only after the state variable data changed.
// It will act as componentDidUpdate() method.
/*
  useEffect(() => {
    console.log(
      "I am useEffect() Hook working as componentDidUpdate() method."
    );
    console.log("Heyy, Counter 1 changed");

    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, [counter1]);

  useEffect(() => {
    console.log("Heyy, Counter 2 changed");
    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, [counter2]);

  useEffect(() => {
    console.log("You haved changes either counter1 or counter2");
    console.log({
      counter1Value: counter1,
      counter2Value: counter2,
    });
  }, [counter1, counter2]);
  

  return (
    <>
      <h1>I am useEffect() Hook</h1>
      <h2>Counter1 : {counter1}</h2>
      <h2>Counter2 : {counter2}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Update Counter 1
      </button>
      <br />
      <br />
      <button onClick={() => setCounter2(counter2 + 1)}>
        Update Counter 2
      </button>
      <hr />
      <br />
      <br />
      <button onClick={() => setDisplay(!isDisplay)}>Toggle</button>

      {isDisplay && <ChildComponent />}
    </>
  );
};

export default App;
*/

// !  ===================  useEffect() Hook with axios ===============

/* 
? Step 1: 
npm install axios
npm i axios

? Step 2:
import variableName from axios

? Step 3:
API requests:
   GET  -->  It will get the data.
   POST -->  It will send the data.
   PUT  -->  It will update the data.
   PATCH  --> It will update the data partially.
   DELETE --> It will delete the data.


? Step 4:
working:
   GET:
         variablename.get("path address");

   POST:
         variablename.post("path address",payload);

   PUT:
         variablename.put("path address / {id}", payload);

   PATCH:
         variablename.patch("path address/ {id}", payload);

   DELETE:
         variablename.delete("path address / {id}");  


import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    ?  Promises
    console.log(axios.get("https://fakestoreapi.com/products"));
      axios.get("https://fakestoreapi.com/products").then(res => {
        console.log(res);
        console.log(res.data);
        setProducts(res.data)
      })
      }

    ?  Async await
    let getData = async () => {
      let { data } = await axios.get("https://fakestoreapi.com/products"); // direct destructuring

      setProducts(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>I am axios</h1>
      {products.map((val, ind) => {
        console.log(ind, "---", val);

        let { id, title, price } = val;
        <React.Fragment key={ind}>
          {id}
          {title}
          {price}
          </React.Fragment>;



<div className="bg-white">
<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {products.map((product) => (
      <div key={product.id} className="group relative">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
      })}
    </>
  );
};
export default App;
*/

// ! ============= Portals / Models ==================

/* 
1. portals allows us to display data on the UI and without rendering into root element.
2. How to use:
   step1: 
   create one more element int he main html file 
   use id and target it.
   
   step2:
    import ReactDOM from "react-dom*;
    
    ReactDom.createPortal(content, container)
    ex:ReactDom.createPortal(</h1>, document.getElementById("portal")) 


import { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  let [isOpen1, setOpen1] = useState(false);
  let [isOpen2, setOpen2] = useState(false);

  return (
    <>
      <h1>I am App Components</h1>
      <section style={{ border: "solid" }}>
        <h2>Without portal</h2>
        {isOpen1 ? (
          <h1>
            I am display without portal
            <button onClick={() => setOpen1(false)}>❌</button>
          </h1>
        ) : null}
        <button onClick={()=> setOpen1(true)}>Open1</button>
      </section>

      <section style={{ border: "solid" }}>
        <h2>With portal</h2>
        {isOpen2 ? ReactDOM.createPortal(
          <h1>
            I am display with portal
            <button onClick={() => setOpen2(false)}>❌</button>
          </h1>, document.getElementById("portal")
        ) : null}
        <button onClick={()=> setOpen2(true)}>Open1</button>
      </section>
    </>
  );
};

export default App;


import NonPortalComponent from "./NonPortalComponent";
import PortalComponent from "./PortalComponent";
import { useState } from "react";

const App = () => {
  let [isOpen1, setOpen1] = useState(false);
  let [isOpen2, setOpen2] = useState(false);

  return (
    <>
      <h1>Without portal</h1>
      <section style={{ border: "solid" }}>
        {isOpen1 && <NonPortalComponent />}
        <button onClick={() => setOpen1(true)}>
          Open Non Portal component
        </button>
      </section>

      <h1>With portal</h1>
      <section style={{ border: "solid" }}>
        {isOpen2 && <PortalComponent closeFn={()=> setOpen2(false)}/>}
        <button onClick={() => setOpen2(true)}>
          Open Portal component
        </button>
      </section>
    </>
  );
};

export default App;
*/

// ! ========== useCallback() ==============
/*
It will helps us to add additional features to React.memo 
? When to use:
  whenever we are passing functions as props we have to use it.

? How to use: 
  Syntax: useCallback( function, [dependencies])

? Working:
1. It will stop the recreation of functions unless the dependency changed.
2. as there is not recreation of function, function  reference will not change, as function reference not changed it props are not changed, as props not changed it will not re-render the component.
*/
