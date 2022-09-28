import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import styles
import styles from "../assets/styles/Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("https://test-binar.herokuapp.com/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.message === "ERROR") {
            localStorage.setItem(
              "token",
              JSON.stringify(res.data.result.access_token)
            );
            navigate("/dashboard");
          }
        });
    } catch (err) {
      alert(err.toString());
      console.log(err);
    }
  };

  return (
    <>
      {/* container login page - start */}
      <div className={`container ${styles.page}`}>
        <div className={`text-center`}>
          {/* title - start */}
          <h1>Login</h1>
          {/* title - end */}

          {/* form login - start */}
          <div className={`${styles.box}`}>
            <div className={`${styles.form}`}>
              <form>
                <input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              <form>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
              <button type="button" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
          {/* form login - end */}

          {/* to register - start */}
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
          {/* to register - end */}
        </div>
      </div>
      {/* container login page - end */}
    </>
  );
}

export default Login;
