import React from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = () => {
    return (
        <Card className={classes.input}>
            <form>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username'></input>
                <label htmlFor='age'>Age (Years)</label>
                <input type='number' id='age'></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser