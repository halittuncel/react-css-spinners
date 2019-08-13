import React from "react";
import styles from "./styles.css";

const Hourglass = props => (
  <>
    <style>{`${styles}`}</style>
    <div className="lds-hourglass" />
  </>
);

export default Hourglass;
