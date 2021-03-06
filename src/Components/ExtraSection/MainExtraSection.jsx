import React from "react";
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
                    {
                        "innerAction":"CÂU HỎI PHỤ SỐ 1",
                        "callTo": null
                    },
                    {
                        "innerAction":"CÂU HỎI PHỤ SỐ 2",
                        "callTo": null
                    },
                    {
                        "innerAction":"CÂU HỎI PHỤ SỐ 3",
                        "callTo": null
                    }

                ]
        }
    }
    render() {
        return <div className="obstacleBackground">
            <DropListActions actions={this.state.actions}/>
            <ExtraQuestionPane/>
            <CandidateNamePanes/>
        </div>;
    }
}