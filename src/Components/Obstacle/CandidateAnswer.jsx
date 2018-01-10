import React from "react";
import "../../Stylesheet/Obstacle/CandidateAnswer.css";

export default class CandidateAnswer extends React.Component {
    render() {
        return (
          <div className="ObstacleCandidateAnswerRender">
              <div className="ObstacleCandidate1">
                  <p className="ObstacleName1">CHÍNH THỤY</p>
                  <p className="ObstacleAns1">GIẢI PHÓNG MIỀN NAM</p>
              </div>
              <div className="ObstacleCandidate2">
                  <p className="ObstacleName2">VĂN THIỆU</p>
                  <p className="ObstacleAns2">GIẢI PHÓNG MIỀN NAM</p>
              </div>
              <div className="ObstacleCandidate3">
                  <p className="ObstacleName3">ĐÌNH ĐỨC</p>
                  <p className="ObstacleAns3">GIẢI PHÓNG MIỀN NAM</p>
              </div>
              <div className="ObstacleCandidate4">
                  <p className="ObstacleName4">XUÂN PHONG</p>
                  <p className="ObstacleAns4">GIẢI PHÓNG MIỀN NAM</p>
              </div>
          </div>
        );
    }
}