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
                    {
                        "innerAction": "SẴN SÀNG VỀ ĐÍCH",
                        "callTo": this.FinishingReady
                    },
                    {
                        "innerAction": "HOÀN THÀNH LƯỢT THI",
                        "callTo": this.FinishingComplete
                    },
                    {
                        "innerAction": "CẬP NHẬT ĐIỂM",
                        "callTo": null
                    }
                ],
            finishingShowMainInfo: false,
            finishingReady: false,
            sectionName: "VỀ ĐÍCH"
        }
    }

    ComeToFinishingSection = () => {
        this.setState({
            finishingShowMainInfo: !this.state.finishingShowMainInfo,
            finishingReady: !this.state.finishingReady
        });
    };

    FinishingReady = () => {
        this.setState({
            finishingReady: true
        });
    };

    FinishingComplete = () => {
        this.setState({
            finishingShowMainInfo: false
        });
    };

    render() {
        return <div className="finishingBackground">
            <DropListActions actions={this.state.actions}/>
            <TopNamesAndPoints/>
            <SectionName sectionName={this.state.sectionName}/>
            {this.state.finishingReady ? <QuestionPackChoosing/> : null}
            {this.state.finishingShowMainInfo ?
                <div>
                    <MainInfoFinishing/>
                    <FunctionButtons/>
                    <Star/>
                </div> : null
            }
        </div>;
    }
}