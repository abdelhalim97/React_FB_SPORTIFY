import "./index.css"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import {Login,ErrorPage} from "./pages"
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
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        {/* footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
