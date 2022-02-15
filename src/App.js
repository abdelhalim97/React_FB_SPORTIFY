import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Dashboard} from "./pages"
import {auth} from './auth/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
function App() {
  const [first, setfirst] = useState(false)
onAuthStateChanged(auth,user=>{
  if(user!==null){
    setfirst(true)
  }
  else{
    setfirst(false)
  }
})
  return (
    <>
      <BrowserRouter>
      {first&&<Dashboard/>}
        <Routes>
          {!first &&
            (<Route path="/" element={<Login/>}></Route>)
          }
          {/* <Route path="*" element={<ErrorPage/>}></Route> */}
        </Routes>
        {/* <footer>footer</footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
