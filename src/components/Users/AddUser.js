import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

function AddUser(props) {

    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || userAge.trim().length === 0 ) {
            return props.onError(true);
        } 
        
        if (+userAge <= 0) {
            return props.onError(true);        
        }

        const userData = {
            id: Math.random().toString(),
            name: userName,
            age: userAge
        }

        props.onAddUser(userData);
        setUserName("");
        setUserAge("")

    };

    

    return (
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
        <div>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={userName} onChange={userNameChangeHandler} ></input>
            </div>
            <div>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={userAge} onChange={userAgeChangeHandler} ></input>
            </div>
            <Button 
                type="submit"
                // onClick={}
            >Add User</Button>
            </div>
        </form>
        </Card>
    );
}

export default AddUser;