import React,{useState, useRef} from 'react'

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
    const userNameRef = useRef();
    const ageRef = useRef();

    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = userNameRef.current.value;
        const enteredAge = ageRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Inputs',
                message: 'Please enter a valid input (not empty).',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Incorrect Age',
                message: 'Please enter a valid age (age > 1).',
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        userNameRef.current.value = ('');
        ageRef.current.value = ('');
    }
    const confirmErrorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmErrorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input ref={userNameRef} id='username' type="text" />
                    <label htmlFor='age'>Age</label>
                    <input ref={ageRef} id='age' type="number" />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser