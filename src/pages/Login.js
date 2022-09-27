// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Login.module.css";

function Login() {
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
