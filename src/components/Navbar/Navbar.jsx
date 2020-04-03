import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../static/images/logo.png";
import NavItem from "./NavItem";
// import { Router, Redirect } from "@reach/router"; 

const navItems = {
    Home: "home",
    About: "who are we",
    SheWho: "she who",
    Events: "events",
    Contact: "contact us"
};

class Navbar extends Component {
    state = {
        width: window.innerWidth,
        navItems,
        menuOpen: false
    };

    componentDidMount = () => {
        window.addEventListener("resize", () => this.handleResize());
    };

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };


    showSettings = event => {
        event.preventDefault();
    };

    toggleMenu = event => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    get links() {
        return Object.entries(this.state.navItems).map((item, index) => {
            return (
                <NavItem
                    onClick={this.highlightNavItem}
                    name={item[0]}
                    path={item[1]}
                    toggleMenu={this.toggleMenu}
                    key={index}
                />
            );
        });
    }

    render() {
        return (
            <div className={styles.Navbar}>
                <nav
                    className={
                        this.state.menuOpen
                            ? `${styles.Nav} ${styles.open}`
                            : `${styles.Nav}`
                    }
                >
                    <div
                        href="#"
                        className={styles.icon}
                        onClick={this.toggleMenu}
                    />

                    <div>
                        <img src={logo} alt="UsProgramme" />
                    </div>

                    <div className={styles.menu}>
                        <ul className={styles.links}>{this.links}</ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;