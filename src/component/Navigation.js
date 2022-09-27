// import styles
import styles from "../assets/styles/Navigation.module.css";

function Navigation() {
  return (
    <>
      {/* navigation bar - start */}
      <nav className={`navbar p-3 ${styles.navigation}`}>
        {/* title - start */}
        <div>
          <h1>Product List</h1>
        </div>
        {/* title - end */}

        {/* menus - start */}
        <div className={`container ${styles.menu}`}>
          <button>Create New</button>
          <a href="/">Logout</a>
        </div>
        {/* menus - end */}
      </nav>
      {/* navigation bar - end */}
    </>
  );
}

export default Navigation;
