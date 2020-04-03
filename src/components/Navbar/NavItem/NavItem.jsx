import React, { Component } from "react";
import styles from "./NavItem.module.scss";
//import { Link } from "@reach/router";

export default class NavItem extends Component {
    render() {
        return (
            <p className={styles.NavItem}>
                <div
                    to={this.props.path}
                    onClick={this.props.toggleMenu}
                    getProps={({ isCurrent }) => {
                        return {
                            style: {
                                color: isCurrent ? "#ff1a8b" : "white"
                            }
                        };
                    }}
                >
                    {this.props.name}
                </div>
            </p>
        );
    }
}