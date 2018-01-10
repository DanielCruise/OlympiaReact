import React from "react";
import "../../Stylesheet/ExtraSection/CandidateNamePanes.css";

export default class CandidateNamePanes extends React.Component {
    render() {
        return (
            <div className="CandidateNamePanesRender">
                <p className="Name1">CHÍNH THỤY</p>
                <p className="Name2">VĂN THIỆU</p>
                <p className="Name3">ĐÌNH ĐỨC</p>
                <p className="Name4">XUÂN PHONG</p>
            </div>
        );
    }
}