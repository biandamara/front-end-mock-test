// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Register.module.css";

function Register() {
  return (
    <>
      <Navigation />
      {/* container register page - start */}
      <div className={`container ${styles.page}`}>
        <h1>Register</h1>
      </div>
      {/* container register page - end */}
    </>
  );
}

export default Register;
