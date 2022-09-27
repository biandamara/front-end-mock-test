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
        <h1>Login</h1>
      </div>
      {/* container login page - end */}
    </>
  );
}

export default Login;
