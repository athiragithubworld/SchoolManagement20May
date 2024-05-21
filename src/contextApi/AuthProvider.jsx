import { useState } from "react";
import AuthContext from "./auth-context";
const AuthProvider = (props)=>{
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('login'));
    const handleLogin = ()=>{
         setIsLoggedIn(true);
         localStorage.setItem('login',true)
         window.location.reload();
         window.location.href='/dashboard'
    }
    const handleLogout = ()=>{
        console.log('a')
        setIsLoggedIn(false);
        localStorage.removeItem('login')
    }
    const authentication ={
        isLoggedIn : isLoggedIn,
        login: handleLogin,
        logout:handleLogout
    }
    return(
        <AuthContext.Provider value={authentication}>{props.children}</AuthContext.Provider>
    )
}
export default AuthProvider;

