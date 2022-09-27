// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Dashboard.module.css";

function Dashboard() {
  return (
    <>
      <Navigation />
      {/* container dashboard page - start */}
      <div className={`container ${styles.page}`}>
        <h1>Dashboard</h1>
      </div>
      {/* container dashboard page - end */}
    </>
  );
}

export default Dashboard;
