import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeDashboard from "./components/DashBoard/EmployeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }

  }, [authData])
  
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData && authData.employees.find((e)=>email==e.email && e.password==password)) {
      setUser("employee");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid email or password");
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeDashboard />}
    </>
  );
};

export default App;
