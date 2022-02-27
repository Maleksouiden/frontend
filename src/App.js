import Profil from'./profil'
import Login from"./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Sign from "./login/Sign";
function App() {
  return ( 
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/sign" element={<Sign/>}></Route>
        <Route path="/profil" element={<Profil/>}></Route>
      </Routes>
    </Router>
  </>
  ) ;
}

export default App;
