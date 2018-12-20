import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

export default class TitlePage extends Component {
    render(){
        return (
            <div className="titlePage">
                <Animated animationIn="fadeInUp" isVisible={true}>
                    <h1 className="title">AMIT PATEL</h1>         
                </Animated>
                <h3 className="subtitle typewriter">&lt;FRONT END DEVELOPER&gt;</h3>
            </div>
        );
    }
}