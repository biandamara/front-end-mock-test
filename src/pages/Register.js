// import components
// import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Register.module.css";

function Register() {
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
                <input placeholder="Name" type="text" />
              </form>
              <form>
                <input placeholder="E-mail" type="email" />
              </form>
              <form>
                <input placeholder="Password" type="password" />
              </form>
              <button type="submit">Register</button>
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
