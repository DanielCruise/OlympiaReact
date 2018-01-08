import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropdownMenu from "../GeneralRendering/DropListActions";
import SectionName from "./SectionName";
import MainInfo from "./MainInfo";

import {backgroundImage} from "../StyleElements/WarmingUpAndFinishing/SectionAndMainCandidate";

export default class MainWarmingUp extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return <div style={backgroundImage}>
            <DropdownMenu/>
            <TopNamesAndPoints/>
            <SectionName/>
            <MainInfo/>
        </div>;
    }
}