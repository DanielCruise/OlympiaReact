import React from "react";
import "../../Stylesheet/ResultShowing/ResultShowingInfo.css";

export default class ResultShowingInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="CurrentShowing">
                    <p className="CurrentPoint">160</p>
                    <p className="CurrentName">CHÍNH THỤY</p>
                </div>
                <div className="ResultShowingCandidateNamePanes">
                    <p className="ResultShowingNamePane">CHÍNH THỤY</p>
                    <p className="ResultShowingNamePane">VĂN THIỆU</p>
                    <p className="ResultShowingNamePane">ĐÌNH ĐỨC</p>
                    <p className="ResultShowingNamePane">XUÂN PHONG</p>
                </div>
            </div>
        );
    }
}