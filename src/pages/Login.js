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
      if (!email || !password) {
        alert("Cannot be empty!");
        return;
      }
      axios
        .post("https://test-binar.herokuapp.com/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.message === "ERROR") {
            alert("User not Registered");
          } else {
            localStorage.setItem(
              "token",
              JSON.stringify(res.data.result.access_token)
            );
            alert("Login Success!");
            navigate("/dashboard");
          }
        });
    } catch (err) {
      alert("You don't have an account, create your account");
      window.location.reload();
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

          <div class="card">
            {/* form login - start */}
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <input
                    className="form-control"
                    id="exampleInputEmail1"
                    type="email"
                    placeholder="E-mail"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
              <button
                class="btn btn-primary"
                type="button"
                onClick={handleSubmit}
              >
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
