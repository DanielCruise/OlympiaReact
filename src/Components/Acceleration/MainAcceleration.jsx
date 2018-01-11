import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import SectionName from "../GeneralRendering/SectionName";
import QuestionPane from "./QuestionPane";
import ImagePane from "./ImagePane";
import AccelerationCandidateAnswer from "./AccelerationCandidateAnswer";
import AccelerationPoints from "./AccelerationPoints";
import "../../Stylesheet/Acceleration/AccelerationPoints.css";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";

export default class MainAcceleration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actions:
                [
                    {
                        "innerAction": "CÂU TRẢ LỜI THÍ SINH",
                        "callTo": this.AccelerationToggleCandidateAnswers
                    },
                    {
                        "innerAction": "CÂU HỎI TIẾP THEO",
                        "callTo": this.AccelerationToggleQuestion
                    },
                    {
                        "innerAction": "QUAY VỀ GIAO DIỆN CHÍNH",
                        "callTo": this.AccelerationToggleQuestion
                    },
                    {
                        "innerAction": "ĐIỂM THÍ SINH",
                        "callTo": this.AccelerationTogglePoints
                    },
                    {
                        "innerAction":"CẬP NHẬT ĐIỂM",
                        "callTo": null
                    },

                ],
            sectionName: "TĂNG TỐC",
            accelerationShowTopPointAndSectionName: true,
            accelerationShowQuestion: false,
            accelerationShowPoints: false,
            accelerationShowCandidateAnswers: false
        };

        this.AccelerationToggleQuestion = this.AccelerationToggleQuestion.bind(this);
        this.AccelerationTogglePoints = this.AccelerationTogglePoints.bind(this);
        this.AccelerationToggleCandidateAnswers = this.AccelerationToggleCandidateAnswers.bind(this);
    }

    AccelerationToggleQuestion = () => {
        this.setState({
            accelerationShowTopPointAndSectionName: false,
            accelerationShowQuestion: true,
            accelerationShowPoints: false,
            accelerationShowCandidateAnswers: false
        });
    };

    AccelerationTogglePoints = () => {
        this.setState({
            accelerationShowQuestion: false,
            accelerationShowPoints: true,
            accelerationShowCandidateAnswers: false
        });
    };

    AccelerationToggleCandidateAnswers = () => {
        this.setState({
            accelerationShowQuestion: false,
            accelerationShowPoints: false,
            accelerationShowCandidateAnswers: true
        });
    };

    render() {
        return <div className="accelerationBackground">
            <DropListActions actions={this.state.actions}/>
            {
                this.state.accelerationShowTopPointAndSectionName ?
                <div>
                    <TopNamesAndPoints/>
                    <SectionName sectionName={this.state.sectionName}/>
                </div> : null
            }
            {
                this.state.accelerationShowQuestion ?
                <div>
                    <QuestionPane/>
                    <ImagePane/>
                </div> : null
            }

            {this.state.accelerationShowCandidateAnswers ? <AccelerationCandidateAnswer/> : null}
            {this.state.accelerationShowPoints ? <AccelerationPoints/> : null}
        </div>;
    }
}