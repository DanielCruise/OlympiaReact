import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import SectionName from "../GeneralRendering/SectionName";
import MainInfoFinishing from "./MainInfoFinishing";
import QuestionPackChoosing from "./QuestionPackChoosing";
import FunctionButtons from "./FunctionButtons";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";
import Star from "./Star";

export default class MainWarmingUp extends React.Component {
    constructor() {
        super();
        this.state = {
            actions:
                [
                    "HOÀN THÀNH PHẦN THI",
                    "CẬP NHẬT ĐIỂM"
                ],
            sectionName: "VỀ ĐÍCH"
        }
    }

    render() {
        return <div className="finishingBackground">
            <DropListActions actions={this.state.actions}/>
            {/*<TopNamesAndPoints/>*/}
            {/*<MainInfoFinishing/>*/}
            {/*<SectionName sectionName={this.state.sectionName}/>*/}
            <QuestionPackChoosing/>
            <FunctionButtons/>
            <Star/>
        </div>;
    }
}