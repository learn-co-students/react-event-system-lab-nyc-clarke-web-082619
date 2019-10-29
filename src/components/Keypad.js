// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {

    keyUp() {
        console.log('Entering password...');
    }
    render() {
        return(
            <input onKeyUp={this.keyUp} type="password"></input>
        );
    }
}

export default Keypad;