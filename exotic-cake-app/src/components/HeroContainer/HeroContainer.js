import React from "react";
import classes from "./HeroContainer.module.scss";
import Image from "next/image";

function HeroContainer() {
  return (
    <div className={classes.container}>
      <Image
        height={100}
        width={100}
        src={""}
        alt="Cake Image"
        className={classes.hero_img}
      />
    </div>
  );
}

export default HeroContainer;
