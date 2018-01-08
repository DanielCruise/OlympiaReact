import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import SectionName from "./SectionName";
import MainInfo from "./MainInfo";

import {backgroundImage} from "../StyleElements/WarmingUpAndFinishing/SectionAndMainCandidate";

export default class MainWarmingUp extends React.Component {

    render() {
        return <div style={backgroundImage}>
            <DropListActions/>
            <TopNamesAndPoints/>
            <SectionName/>
            <MainInfo/>
        </div>;
    }
}