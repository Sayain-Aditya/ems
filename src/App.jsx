import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/DashBoard/EmployeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null)
  const [LoogedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }

  // }, [authData])
  
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData) {
      const employee = authData.employees.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser("employee");
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    } else {
      alert("Invalid email or password");
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : user == 'employee' ? <EmployeDashboard data={LoogedInUser} />: null }
    </>
  );
};

export default App;
