import React from 'react';
import "../../Stylesheet/Finishing/Buttons.css";
import Star from "../../Resources/Images/Star.png";

export default class FunctionButtons extends React.Component {
    render() {
        return (
            <div className="FunctionButtonsRender">
                <div>
                    <p className="right">R</p>
                    <p className="time">Time</p>
                    <p className="wrong">W</p>
                </div>
            </div>
        );
    }
}