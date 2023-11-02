import React from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.logo_container}>
        <h1>Exotic Cakes</h1>
      </div>
      <div className={classes.links_container}>
        <ul className={classes.desk_menu_container}>
          {pageLink.map((i, idx) => (
            <li key={idx}>
              <Link href={i.href}>{i.name}</Link>
            </li>
          ))}
        </ul>
        <GiHamburgerMenu className={classes.icon} />
        <ul className={classes.mob_menu_container}>
          {pageLink.map((i, idx) => (
            <li key={idx}>
              <Link href={i.href}>{i.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;

const pageLink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "about/about",
  },
  {
    name: "Products",
    href: "Products/products",
  },
  {
    name: "Contact",
    href: "Contact/contact",
  },
];
