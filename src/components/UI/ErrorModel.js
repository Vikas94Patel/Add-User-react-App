import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModel.module.css";

function ErrorModel(props) {

    return(
        <div>
        <div className={styles.backdrop} onClick={props.onConfirmError}/>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button 
                    type="submit"
                    onClick={props.onConfirmError}
                >OK </Button>
            </footer>
        </Card>
        </div>
    );
}

export default ErrorModel;