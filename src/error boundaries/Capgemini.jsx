
import { Candidate } from "./Candidate";
import { ErrorBoundary } from "react-error-boundary";

const Capgemini = () => {
    const fallback_render=({ error }) =>{
        return (
          <div style={{ border:"solid red",height:"100px",width:"150px"  }}>
            <h1>Something went wrongs</h1>
            <p>{error.message}</p>
          </div>
        );
      }
  let data =[
    { name: "Rajat", gender: "Male" },
    { name: "Megha", gender: "Female" },
    { name: "Shubham", gender: "Male" },
    { name: "Diksha", gender: "Female" },
    { name: "Akansha", gender: "Female" },
    { name: "Shivani", gender: "Female" },
    { name: "Kabir", gender: "Male" },
  ];
  
  

  return(<section style={{display:"flex",padding:"40px",gap:"15px"}}>
    <h1>Candidate who selected</h1>
    {
        data.map((val,ind)=>(
            <ErrorBoundary  fallbackRender={fallback_render}>
                 <Candidate data={val} id={ind} />
            </ErrorBoundary >
        ))
    }
    </section>)
};

export default Capgemini;