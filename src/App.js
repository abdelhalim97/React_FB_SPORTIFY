import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Home} from "./pages"
import {auth} from './auth/firebase'
function App() {
  return (
    <>
      <BrowserRouter>
      {/* 
      <nav>
        <Link to="/">home</Link>
      </nav>
       */}
        <Routes>
        {auth?
          <Route path="/" element={<Home></Home>}></Route>
        :
          <Route path="/" element={<Login></Login>}></Route>}
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        {/* footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
