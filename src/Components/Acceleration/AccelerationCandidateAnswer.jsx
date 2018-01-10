import React from 'react';
import "../../Stylesheet/Acceleration/AccelerationCandidateAnswer.css";

export default class AccelerationCandidateAnswer extends React.Component {
    render() {
        return (
            <div className="AccelerationCandidateAnswerRender">
                <div className="AccelerationCandidate1">
                    <p className="AccelerationTime1">0.00</p>
                    <div className="AccelerationNameAndAns1">
                        <p className="AccelerationName1">CHÍNH THỤY</p>
                        <p className="AccelerationAns1">GIẢI PHÓNG MIỀN NAM</p>
                    </div>
                </div>
                <div className="AccelerationCandidate2">
                    <p className="AccelerationTime2">0.00</p>
                    <div className="AccelerationNameAndAns2">
                        <p className="AccelerationName2">VĂN THIỆU</p>
                        <p className="AccelerationAns2">GIẢI PHÓNG MIỀN NAM</p>
                    </div>
                </div>
                <div className="AccelerationCandidate3">
                    <p className="AccelerationTime3">0.00</p>
                    <div className="AccelerationNameAndAns3">
                        <p className="AccelerationName3">ĐÌNH ĐỨC</p>
                        <p className="AccelerationAns3">GIẢI PHÓNG MIỀN NAM</p>
                    </div>
                </div>
                <div className="AccelerationCandidate4">
                    <p className="AccelerationTime4">0.00</p>
                    <div className="AccelerationNameAndAns4">
                        <p className="AccelerationName4">XUÂN PHONG</p>
                        <p className="AccelerationAns4">GIẢI PHÓNG MIỀN NAM</p>
                    </div>
                </div>
            </div>
        );
    }
}