import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import styles
import styles from "../assets/styles/Register.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Cannot be empty!");
      return;
    } else {
      try {
        axios.post("https://test-binar.herokuapp.com/auth/signup", {
          name: name,
          email: email,
          password: password,
        });
        alert("Register Success!");
        navigate("/");
      } catch (err) {
        alert("Your e-mail or username is already in use");
        window.location.reload();
      }
    }
  };

  return (
    <>
      {/* <Navigation /> */}
      {/* container register page - start */}
      <div className={`container ${styles.page}`}>
        <div className={`text-center`}>
          {/* title - start */}
          <h1>Register</h1>
          {/* title - end */}

          {/* form login - start */}
          <div className={`${styles.box}`}>
            <div className={`${styles.form}`}>
              <form>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </form>
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
                Register
              </button>
            </div>
          </div>
          {/* form login - end */}

          {/* to register - start */}
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
          {/* to register - end */}
        </div>
      </div>
      {/* container register page - end */}
    </>
  );
}

export default Register;
