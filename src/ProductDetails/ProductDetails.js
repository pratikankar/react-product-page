import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductOptions];
    if (pos === props.currentImagePos) {
      classArr.push(classes.SelectedProduct);
    }

    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => props.onOptionClick(pos)}
      />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.ProductFeatures];
    if (pos === props.currentFeature) {
      classArr.push(classes.SelectedFeature);
    }

    return (
      <button
        onClick={() => props.onFeatureClick(pos)}
        className={classArr.join(" ")}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>

      <h3 className={classes.SecondaryHeading}>Select Color</h3>
      <div>{colorOptions}</div>

      <h3 className={classes.SecondaryHeading}>Features</h3>
      <div>{featureList}</div>

      <button className={classes.BuyButton}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
