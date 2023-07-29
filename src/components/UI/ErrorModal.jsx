import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from './Button';

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
    return (
        <Card>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>   
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>
            </div>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))};
            {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('modal-overlay-root'))};
        </>
    )
}

export default ErrorModal