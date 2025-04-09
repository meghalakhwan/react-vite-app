

const Status = (props) => {
  if (
    props.val !== "Loading" &&
    props.val !== "Success" &&
    props.val !== "error"
  ) {
    throw new Error("Something went worng");
  }
  console.log(props.val);
  return (
 
    <>
    <li style={{fontWeight: "bold", display: "flex",
          flexDirection: "row",
          padding: "10px",
          fontSize : "20px",
          justifyContent: "center",
          alignItems : "center",
          border : "4px solid green",
          width : "50%"
          }}>
    {" Hey user you data is "}{" "} {props.val}
    </li>
    </>
  );
};

export default Status;