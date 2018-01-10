import React from 'react';
import "../../Stylesheet/Finishing/Buttons.css";
import StarTemp from "../../Resources/Images/Star.png";
import StarGif from "../../Resources/Images/StarGif.gif";

export default class Star extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img className="StarTemp" src={StarTemp}/>
                </div>
                <div>
                    <img className="StarGif" src={StarGif}/>
                </div>
            </div>
        );
    }
}