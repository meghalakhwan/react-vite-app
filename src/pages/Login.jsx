import { NavLink, Outlet } from "react-router-dom"

const Login = () => {
  return (
    <>
    <h1>Login Component</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ipsa ab quia nisi eos sequi aliquam, fugiat, quam cum natus porro, aspernatur provident quidem consectetur rerum at quos commodi nam adipisci dicta sit? Soluta nihil illum nostrum, quidem et quasi corrupti doloribus aliquid? Ea deleniti ratione sequi officia. Repudiandae, accusamus?</p>
    <nav
     style={{
      display: "flex",
      justifyContent: "space-evenly"
    }}>
      <NavLink to="loginadmin">Admin</NavLink>
      <NavLink to="loginusers">Users</NavLink>
    </nav>  
        <Outlet /> 
    </>
  )
}

export default Login;
