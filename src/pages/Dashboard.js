// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Dashboard.module.css";
import Card from "../component/Card";
function Dashboard() {
  return (
    <>
      {/* <Navigation /> */}
      <Navigation />
      {/* navigation bar - end */}

      {/* container dashboard page - start */}
      <div className={`container ${styles.page}`}>
        <div className={`row row-cols-3 row-cols-lg-5 gap-3`}>
          {/* card - start */}
          <Card />
          {/* card - end */}
        </div>
      </div>
      {/* container dashboard page - end */}
    </>
  );
}

export default Dashboard;
