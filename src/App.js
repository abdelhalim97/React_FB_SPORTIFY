import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Dashboard} from "./pages"
import { Footer } from "./components";
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
      <BrowserRouter>
      <div className="flex flex-col justify-between" style={{minHeight:'100vh'}}>
      {first&&<Dashboard/>}
      <Routes>
          {!first &&<Route path="/" element={<Login/>}/>}
          {!first &&<Route path="*" element={<ErrorPage/>}/>}
      </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
