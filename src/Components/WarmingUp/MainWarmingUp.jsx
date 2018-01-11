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
                    {
                        "innerAction": "BẮT ĐẦU PHẦN THI",
                        "callTo": this.warmingUpToggleMainInfo
                    },
                    {
                        "innerAction": "THÍ SINH TIẾP THEO",
                        "callTo": this.WarmingUpToggleMainInfo
                    },
                    {
                        "innerAction":"CẬP NHẬT ĐIỂM",
                        "callTo": null
                    }
                ],
            warmingUpShowMainTheme: false,
            sectionName: "KHỞI ĐỘNG"
        };

        this.WarmingUpToggleMainInfo = this.WarmingUpToggleMainInfo.bind(this);
    }

    WarmingUpToggleMainInfo = () => {
        this.setState({warmingUpShowMainTheme: !this.state.warmingUpShowMainTheme});
};

    render() {
        return <div className="backgroundImage">
            <DropListActions actions={this.state.actions}/>
            <TopNamesAndPoints/>
            <SectionName sectionName={this.state.sectionName}/>
            {this.state.warmingUpShowMainTheme ? <MainInfo/> : null}
        </div>;
    }
}