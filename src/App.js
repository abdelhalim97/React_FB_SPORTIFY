import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Dashboard} from "./pages"
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
       {auth&&<Dashboard/>}
        <Routes>
        {!auth&&<Route path="/" element={<Login></Login>}></Route>}
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <footer>footer</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
