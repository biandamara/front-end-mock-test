// import { Axios } from "axios";
// import { useEffect } from "react";

// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Login.module.css";

function Login() {
  // useEffect(() => {
  //   Axios.get("https://test-binar.herokuapp.com")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Navigation />
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
                <input placeholder="E-mail" type="email" />
              </form>
              <form>
                <input placeholder="Password" type="password" />
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
