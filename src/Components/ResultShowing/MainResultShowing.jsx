import React from "react";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";
import DropListSections from "../GeneralRendering/DropListSections";
import ResultShowingInfo from "./ResultShowingInfo";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";

export default class MainResultShowing extends React.Component {

    render() {
        return <div className="resultShowingBackGround">
            <DropListSections/>
            <ResultShowingInfo/>
        </div>;
    }
}