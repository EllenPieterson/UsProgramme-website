import React, { Component } from "react";
import styles from "./ProfileCard.module.scss";
//import { globalHistory } from "@reach/router";

export default class ProfileCard extends Component {
    state = {
        isFaceUp: true
    }

    // handleClick = () => {
    //     this.setState({
    //         isFaceUp: !this.state.isFaceUp
    //     })
    // }

    render() {
        //const rotateStyle = this.state.isFaceUp ? "" : styles.cardRotated;
        return (
            <div className={styles.something}>
                {/* <article onClick={this.handleClick} className={`${styles.card} ${rotateStyle}`}> */}
                    <div className={styles.cardFront}>
                        <h3>{this.props.cardData.name}</h3>
                        <h3>{this.props.cardData.age}</h3>
                        <div className={styles.topSection}>
                            <section className={styles.bio}>{this.bio}</section>
                            <img
                                className={styles.headshot}
                                alt={this.props.cardData.name + "headshot"}
                                src={this.props.cardData.headshot}
                            />
                        </div>
                    </div>
                {/* </article> */}
            </div>
        );
    }
}