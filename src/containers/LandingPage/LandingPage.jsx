import React, { Component } from  "react";
import styles from "./LandingPage.module.scss";
import backgroundimage from "../../static/images/landingbackground.jpg";

export default class LandingPage extends Component {
    render() {
        return (
            <section className={styles.container}>
                <h1 className={styles.quote}>
                    "...part of the way of becoming an individual who
                    makes a positive impact is to learn the secrets from
                    those who are already succeeding and by seeking out 
                    available opportunities..."
                </h1>
            </section>
        )
    }
}