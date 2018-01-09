import React from "react";
import "../../Stylesheet/Obstacle/CandidateAnswer.css";

export default class CandidateAnswer extends React.Component {
    render() {
        return (
          <div className="CandidateAnswerRender">
              <div className="Candidate1">
                  <p className="Name1">CHÍNH THỤY</p>
                  <p className="Ans1">GIẢI PHÓNG MIỀN NAM</p>
              </div>
              <div className="Candidate2">
                  <p className="Name2">VĂN THIỆU</p>
                  <p className="Ans2">GIẢI PHÓNG MIỀN NAM</p>
              </div>
              <div className="Candidate3">
                  <p className="Name3">ĐÌNH ĐỨC</p>
                  <p className="Ans3">GIẢI PHÓNG MIỀN NAM</p>
              </div>
              <div className="Candidate4">
                  <p className="Name4">XUÂN PHONG</p>
                  <p className="Ans4">GIẢI PHÓNG MIỀN NAM</p>
              </div>
          </div>
        );
    }
}