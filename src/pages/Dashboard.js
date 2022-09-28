import { useEffect } from "react";
import axios from "axios";

// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Dashboard.module.css";
import Card from "../component/Card";

function Dashboard() {
  const getProducts = () => {
    axios
      .get("https://test-binar.herokuapp.com/v1/products")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

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
