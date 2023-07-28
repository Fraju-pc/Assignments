import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from '../src/components/UserContext';
import UserNavbar from "./components/UserNavbar";
import AdminNavbar from "./components/AdminNavbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import ChildA from "./pages/ChildA/ChildA"
import ChildB from './pages/ChildB/ChildB'
import ChildC from './pages/ChildC/ChildC'
import ChildD from './pages/ChildD/ChildD'
import Users from './pages/Users/Users'
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'


function App() {
   //Api URL
   const Chores_Api_URL = 'https://6489d1fc5fa58521cab04f75.mockapi.io/ChoreDb'
  const [chores, setChores] = useState([]);

    //Api Pull function
    async function getChores() {
      const response = await fetch(Chores_Api_URL)
      const data = await response.json();
      //console.log(data);
      setChores(data)
      //console.log(chores);
    };
     //Useeffect to pull data on loadin
      useEffect(()=> {
        getChores()
      }, [])
      //Context for Navbar
      const { user } = useUserContext();

  return (
    <>
      <Router>
      {user ? (
        <>
          {user.role === 'admin' ? <AdminNavbar /> : <UserNavbar />}
        </>
      ) : null}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin getChores={getChores} chores={chores} 
          Chores_Api_URL={Chores_Api_URL}/>} />
          <Route path="/ChildA" element={<ChildA chores={chores}/>} />
          <Route path="/ChildB" element={<ChildB chores={chores}/>} />
          <Route path="/ChildC" element={<ChildC chores={chores}/>} />
          <Route path="/ChildD" element={<ChildD chores={chores}/>} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
