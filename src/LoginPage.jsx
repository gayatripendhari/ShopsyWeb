import React,{useState} from 'react';
import style from "./Login.module.css";
import ProductWrapper from "./ProductWrapper.jsx";

const  LoginPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault(); // Prevent form submission default behavior
      if (username && email && password) {
          alert("Successfully Logged In");
          setIsLoggedIn(true); // Switch to ProductWrapper page
      } else {
          alert("Please fill all fields!");
      }    
  };
  
    return (
      <>
      {isLoggedIn ? (
          <ProductWrapper />
      ) : (
          <div className={style.container}>
              <h1>Login</h1>
              <form className={style.form}>
                  <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={style.ip}
                  />
                  <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={style.ip}
                  />
                  <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={style.ip}
                  />
                  <button onClick={handleLogin} className={style.log}>
                      Login
                  </button>
              </form>
          </div>
      )}
  </>

    );
  };

export default LoginPage
