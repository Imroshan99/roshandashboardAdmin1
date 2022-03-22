import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { productData, userData } from "./components/formData/FormData";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./components/style/style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const {darkMode}=useContext(DarkModeContext)
  // console.log("dark mode",darkMode)
  return (
        <div className={darkMode? "App dark":"App"} >
            <BrowserRouter>
              <Routes>
                <Route path="/" >
                  <Route index element={<Home/>}/>
                  <Route path="login" element={<Login/>}/>
                  <Route path="users" >
                      <Route index element={<List/>}/>
                      <Route path=":userId" element={<Single/>}/>
                      <Route path="new" element={<New inputs={userData} title="Add New User"/>}/>
                  </Route>
                  <Route path="product" >
                    <Route index element={<List/>}/>
                    <Route path=":productId" element={<Single/>}/>
                    <Route path="new" element={<New inputs={productData} title="Add New Product"/>}/>
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
        </div>
     
  );
}

export default App;
