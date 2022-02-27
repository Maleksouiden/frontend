import Profil from'./profil'
import Login from"./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Sign from "./login/Sign";
import { useState } from 'react';
function App() {
  const [user,setUser] = useState(null) ; 
  return ( 

  <>
    <Router>
      <Routes>
        <Route user={user} path="/"  element={<Landing/>}></Route>
        <Route path="/login" element={<Login  user={user} setUser={setUser}/>}></Route>
        <Route setUser={setUser} path="/sign" element={<Sign/>}></Route>
        <Route user={user} path="/profil" element={<Profil/>}></Route>
      </Routes>
    </Router>
  </>
  ) ;
}

export default App;
