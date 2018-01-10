import React from 'react';
import "../../Stylesheet/Obstacle/AdventurousPicture.css";
import AdvenPicture from "../../Resources/Images/AdvenPic.png";


export default class AdventurousSection extends React.Component {
    render() {
        return (
            <div className="AdvenPic">
                <img src={AdvenPicture}/>
            </div>
        );
    }
}