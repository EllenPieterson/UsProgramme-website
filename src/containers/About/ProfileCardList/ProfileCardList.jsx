import React, { Component } from "react";
import styles from "./ProfileCardList.module.scss";
import ProfileCard from "../ProfileCard";
import firebase, { firestore } from "../../../firebase";

export default class ProfileCardList extends Component {
    state = {
        girls: [],
    }

    componentDidMount() {
        firestore
            .collection("girls")
            .get()
            .then((query) => {
                const girls = query.docs.map(doc => doc.data());
                this.setState({girls: girls});
            })
    }

    render() {
        return (
            <>
                <section className={styles.cards}>
                    {
                        this.state.girls.map((girl, index) => {
                            return (<ProfileCard cardData={girl} key={index} />)
                        })
                    }
                </section>
            </>
        )
    }
}