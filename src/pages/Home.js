// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Home.module.css";

function Home() {
  return (
    <>
      <Navigation />
      {/* container home page - start */}
      <div className={`container ${styles.page}`}>
        <h1>Home</h1>
      </div>
      {/* container home page - end */}
    </>
  );
}

export default Home;
