import React from "react";
import DropListSections from "../GeneralRendering/DropListSections";
import DropListActions from "../GeneralRendering/DropListActions";
import ExtraQuestionPane from "./ExtraQuestionPane";
import CandidateNamePanes from "./CandidateNamePanes";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";

export default class MainExtraSection extends React.Component {
    constructor() {
        super();
        this.state = {
            actions:
                [
                    "CÂU HỎI PHỤ SỐ 1",
                    "CÂU HỎI PHỤ SỐ 2",
                    "CÂU HỎI PHỤ SỐ 3"

                ]
        }
    }
    render() {
        return <div className="obstacleBackground">
            <DropListActions actions={this.state.actions}/>
            <DropListSections/>
            <ExtraQuestionPane/>
            <CandidateNamePanes/>
        </div>;
    }
}