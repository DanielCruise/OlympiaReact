import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import DropListSections from "../GeneralRendering/DropListSections";
import SectionName from "../GeneralRendering/SectionName";
import RowsAndQuestionPane from "./RowsAndQuestionPane";
import ClueImage from "./ClueImage";
import Points from "./Points";
import CandidateAnswer from "./CandidateAnswer";
import CandidateGranted from "./CandidateGranted";
import AdventurousSection from "./AdventurousSection";
import "../../Stylesheet/GeneralStyles/SectionNameAndBackground.css";

export default class MainObstacle extends React.Component {
    constructor() {
        super();
        this.state = {
            actions:
                [
                    "Ô MẠO HIỂM",
                    "CÂU TRẢ LỜI HÀNG NGANG",
                    "QUAY LẠI GIAO DIỆN CHÍNH",
                    "HÌNH ẢNH GỢI Ý",
                    "ĐIỂM THÍ SINH",
                    "HIỆN TOÀN BỘ HÀNG NGANG",
                    "HIỆN TOÀN BỘ HÌNH ẢNH",
                    "CÂU HỎI Ô TRUNG TÂM",
                    "15S CUỐI CÙNG",
                    "CẬP NHẬT ĐIỂM",
                    "TỔNG KẾT ĐIỂM"

                ],
            sectionName: "VƯỢT CHƯỚNG NGẠI VẬT"
        }
    }

    render() {
        return <div className="obstacleBackground">
            <DropListActions actions={this.state.actions}/>
            <DropListSections/>
            {/*<TopNamesAndPoints/>*/}
            {/*<SectionName sectionName={this.state.sectionName}/>*/}
            <RowsAndQuestionPane/>
            {/*<ClueImage/>*/}
            {/*<Points/>*/}
            {/*<CandidateAnswer/>*/}
            <CandidateGranted/>
            {/*<AdventurousSection/>*/}
        </div>;
    }
}