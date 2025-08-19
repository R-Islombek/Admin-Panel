import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {


  return (
       <div className="login-container">
             <form >
                  <input 
                     type="text"
                     id="email"
                     placeholder="@nimadir kiriting"
                     required
                     />

                  <input 
                     type="password" 
                     id="password"
                     placeholder="parol kiriting"
                     />
                     <button type="submit">Ro'yxatdan o'tish</button>
             </form>
       </div>   
  )
}

export default Login;