import { useState, useEffect } from "react";
import axios from "axios";

// import components
import Navigation from "../component/Navigation";

// import styles
import styles from "../assets/styles/Dashboard.module.css";
import Card from "../component/Card";

function Dashboard() {
  const [data, setData] = useState([]);

  const getProducts = () => {
    axios
      .get("https://test-binar.herokuapp.com/v1/products")
      .then((res) => {
        setData(res.data.result);
        console.log(res);
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
