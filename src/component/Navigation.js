// import styles
import styles from "../assets/styles/Navigation.module.css";

function Navigation() {
  return (
    <>
      {/* navigation bar - start */}
      <nav className={`row p-3 ${styles.navigation}`}>
        {/* title - start */}
        <div className={`col-2 ${styles.title}`}>
          <h1>Product List</h1>
        </div>
        {/* title - end */}

        {/* menus - start */}
        <div className={`col ${styles.menu}`}>
          <div>
            <button>Create New</button>
          </div>
          <div>
            <a href="/">Logout</a>
          </div>
        </div>
        {/* menus - end */}
      </nav>
      {/* navigation bar - end */}
    </>
  );
}

export default Navigation;
