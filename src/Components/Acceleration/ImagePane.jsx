import React from 'react';
import "../../Stylesheet/Acceleration/MainInfoAcceleration.css";
import TempImg from "../../Resources/Images/TempImg.jpg";
export default class ImagePane extends React.Component {
    render() {
        return (
            <div className="imagePane">
                <img src={TempImg}/>
            </div>
        );
    }
}