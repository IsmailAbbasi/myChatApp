import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import "./style.scss"
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import { useContext } from "react"

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <BrowserRouter>
    <Routes>
      <Route>
      <Route index element= {<Home/>}/>
      <Route path="login" element= {<Login/>}/>
      <Route path="register" element= {<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
