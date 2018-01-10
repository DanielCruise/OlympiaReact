import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import DropListSections from "../GeneralRendering/DropListSections";
import SectionName from "../GeneralRendering/SectionName";
import QuestionPane from "./QuestionPane";
import ImagePane from "./ImagePane";
import AccelerationCandidateAnswer from "./AccelerationCandidateAnswer";
import AccelerationPoints from "./AccelerationPoints";
import "../../Stylesheet/Acceleration/AccelerationPoints.css";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";

export default class MainAcceleration extends React.Component {
    constructor() {
        super();
        this.state = {
            actions:
                [
                   "CÂU HỎI TIẾP THEO",
                    "QUAY VỀ GIAO DIỆN CHÍNH",
                    "ĐIỂM THÍ SINH",
                    "CẬP NHẬT ĐIỂM",
                    "TỔNG KẾT ĐIỂM"

                ],
            sectionName: "TĂNG TỐC"
        }
    }

    render() {
        return <div className="accelerationBackground">
            <DropListActions actions={this.state.actions}/>
            <DropListSections/>
            {/*<TopNamesAndPoints/>*/}
            {/*<SectionName sectionName={this.state.sectionName}/>*/}
            <QuestionPane/>
            <ImagePane/>
            {/*<AccelerationCandidateAnswer/>*/}
            {/*<AccelerationPoints/>*/}
        </div>;
    }
}