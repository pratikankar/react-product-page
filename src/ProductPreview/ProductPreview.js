import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
  const hours = new Date().getHours() > 9 ? new Date().getHours() : "0" + new Date().getHours();
  const minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes();

  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentImage} alt="product" />

      {props.currentFeature === 1 ? (
        <div className={classes.ShowHeartBeat}>
          <i className="fa-solid fa-heart-pulse"></i>
          <p>80</p>
        </div>
      ) : (
        <div className={classes.ShowTime}>
          <p>{`${hours}:${minutes}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
