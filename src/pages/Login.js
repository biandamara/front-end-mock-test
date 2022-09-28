import { useNavigate } from "react-router-dom";
import axios from "axios";

// import styles
import styles from "../assets/styles/Login.module.css";

function Login() {
  const navigate = useNavigate();

  axios
    .post(`https://test-binar.herokuapp.com/auth/login`)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data.result));
      navigate("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });

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
                <input id="email" type="email" placeholder="E-mail" />
              </form>
              <form>
                <input id="password" type="password" placeholder="Password" />
              </form>
              <button>Login</button>
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
