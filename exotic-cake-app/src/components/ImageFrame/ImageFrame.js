import React from "react";
import classes from "./ImageFrame.module.scss";

function ImageFrame() {
  return (
    <div className={classes.container}>
      <div className={classes.corousel_container}></div>
      <div className={classes.image_container}></div>
    </div>
  );
}

export default ImageFrame;
