import React, { Component } from "react";
import classes from "./App.module.css";
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import Navbar from "./Navbar/Navbar";
import ProductData from "./Utils/ProductData";

class App extends Component {
  state = {
    productData: ProductData,
    currentImagePos: 0,
    currentFeature: 0,
  };

  onOptionClick = (pos) => {
    this.setState({ currentImagePos: pos });
  };

  onFeatureClick = (pos) => {
    this.setState({ currentFeature: pos });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.currentImagePos === this.state.currentImagePos) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentImage={this.state.productData.colorOptions[this.state.currentImagePos].imageUrl}
              currentFeature={this.state.currentFeature}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onOptionClick={this.onOptionClick} currentImagePos={this.state.currentImagePos}
              onFeatureClick={this.onFeatureClick} currentFeature={this.state.currentFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
