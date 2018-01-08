import React from "react";
import '../StyleElements/WarmingUpAndFinishing/TopCandidatePanes.css';

export default class TopNamesAndPoints extends React.Component {
    render() {
        return (
            <div>
                <div className="BigTopCandidatePane">
                    <p>CHÍNH THỤY</p>
                    <p>VĂN THIỆU</p>
                    <p>ĐÌNH ĐỨC</p>
                    <p>XUÂN PHONG</p>
                </div>
                <div className="BigTopPointPane">
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                </div>
            </div>
        );
    }
}