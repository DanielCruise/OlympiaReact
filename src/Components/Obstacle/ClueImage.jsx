import React from 'react';
import Piece1 from "../../Resources/Images/Pie1.png";
import Piece2 from "../../Resources/Images/Pie2.png";
import Piece3 from "../../Resources/Images/Pie3.png";
import Piece4 from "../../Resources/Images/Pie4.png";
import PieceCenter from "../../Resources/Images/PieCen.png";
import "../../Stylesheet/Obstacle/ClueImage.css";


export default class ClueImage extends React.Component {
    render() {
        return (
          <div className="ClueImageRender">
              <img className="Piece1" src={Piece1}/>
              <img className="Piece2" src={Piece2}/>
              <img className="Piece3" src={Piece3}/>
              <img className="Piece4" src={Piece4}/>
              <img  className="PieceCenter" src={PieceCenter}/>
          </div>
        );
    }
}