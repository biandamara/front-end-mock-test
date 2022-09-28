import { useState } from "react";

// import styles
import styles from "../assets/styles/Card.module.css";

function Card() {
  // handle
  const update =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTggMTQuNDV2Ni41NWgtMTZ2LTEyaDYuNzQzbDEuOTc4LTJoLTEwLjcyMXYxNmgyMHYtMTAuNTczbC0yIDIuMDIzem0xLjQ3My0xMC42MTVsMS43MDcgMS43MDctOS4yODEgOS4zNzgtMi4yMy40NzIuNTEyLTIuMTY5IDkuMjkyLTkuMzg4em0tLjAwOC0yLjgzNWwtMTEuMTA0IDExLjIxNi0xLjM2MSA1Ljc4NCA1Ljg5OC0xLjI0OCAxMS4xMDMtMTEuMjE4LTQuNTM2LTQuNTM0eiIvPjwvc3ZnPg==";
  const remove =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOSAyNGgtMTRjLTEuMTA0IDAtMi0uODk2LTItMnYtMTdoLTF2LTJoNnYtMS41YzAtLjgyNy42NzMtMS41IDEuNS0xLjVoNWMuODI1IDAgMS41LjY3MSAxLjUgMS41djEuNWg2djJoLTF2MTdjMCAxLjEwNC0uODk2IDItMiAyem0wLTE5aC0xNHYxNi41YzAgLjI3Ni4yMjQuNS41LjVoMTNjLjI3NiAwIC41LS4yMjQuNS0uNXYtMTYuNXptLTkgNGMwLS41NTItLjQ0OC0xLTEtMXMtMSAuNDQ4LTEgMXY5YzAgLjU1Mi40NDggMSAxIDFzMS0uNDQ4IDEtMXYtOXptNiAwYzAtLjU1Mi0uNDQ4LTEtMS0xcy0xIC40NDgtMSAxdjljMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi05em0tMi03aC00djFoNHYtMXoiLz48L3N2Zz4=";

  return (
    <>
      {/* card - start */}
      <div className={`d-flex flex-column mt-5 col ${styles.card}`}>
        {/* handle - start */}
        <div className={`d-flex gap-3 text-end ${styles.handle}`}>
          <img className="" src={update} alt="" />
          <img className="" src={remove} alt="" />
        </div>
        {/* handle - end */}

        {/* image - start */}
        <div className={`${styles.image}`}>
          <img src="" alt="" />
        </div>
        {/* image - end */}

        {/* detail - start */}
        <div className={`${styles.detail}`}>
          <p>Title</p>
          <p className={`mt-3`}>$</p>
        </div>
        {/* detail - end */}
      </div>
      {/* card - end */}
    </>
  );
}

export default Card;
