// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component{
    consoleGood = () => {console.log("Good!")}
    consoleHey = () => {console.log("Hey! Eyes on me!")}
    render(){
        return <button onFocus={this.consoleGood} onBlur={this.consoleHey}></button>
    }
}