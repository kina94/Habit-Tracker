import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <>
                <input className="add-habbit" type="text" placeholder='Habit'></input>
                <button className="add-button">Add</button>
            </>
        );
    }
}

export default Add;