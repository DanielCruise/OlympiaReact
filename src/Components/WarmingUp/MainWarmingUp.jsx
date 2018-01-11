import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import SectionName from "../GeneralRendering/SectionName";
import MainInfo from "./MainInfo";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";

export default class MainWarmingUp extends React.Component {
    constructor() {
        super();
        this.state = {
            actions:
                [
                    "THÍ SINH TIẾP THEO",
                    "CẬP NHẬT ĐIỂM",
                    "TỔNG KÉT ĐIỂM"
                ],
            sectionName: "KHỞI ĐỘNG"
        }
    }

    render() {
        return <div className="backgroundImage">
            <DropListActions actions={this.state.actions}/>
            <TopNamesAndPoints/>
            <SectionName sectionName={this.state.sectionName}/>
            <MainInfo/>
        </div>;
    }
}