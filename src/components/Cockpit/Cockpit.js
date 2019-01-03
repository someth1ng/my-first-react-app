import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assingedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assingedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assingedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello, World!</h1>
            <p className={assingedClasses.join(' ')}>This is dynamicaly classes toggle</p>
            <button
                className={btnClass}
                onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;