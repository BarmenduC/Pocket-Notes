import React, { useEffect, useRef, useState } from "react";
import styles from "./GroupBar.module.css";

import Group from "../Group/Group";

const GroupBar = (props) => {
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.headingText}>Pocket Notes</h1>
        </div>
        <div className={styles.notes}>
          <Group popupOpen={props.popupOpen} setPopupOpen={props.setPopupOpen} />
        </div>
      </div>
    </>
  );
};

export default GroupBar;
