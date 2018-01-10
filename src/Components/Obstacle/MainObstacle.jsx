import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import SectionName from "../GeneralRendering/SectionName";
import RowsAndQuestionPane from "../Obstacle/RowsAndQuestionPane";
import ClueImage from "../Obstacle/ClueImage";
import Points from "../Obstacle/Points";
import CandidateAnswer from "../Obstacle/CandidateAnswer";
import CandidateGranted from "../Obstacle/CandidateGranted";
import {obstacleBackground} from "../../Stylesheet/GeneralStyles/SectionAndMainCandidate";

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
        return <div style={obstacleBackground}>
            <DropListActions actions={this.state.actions}/>
            <TopNamesAndPoints/>
            <SectionName sectionName={this.state.sectionName}/>
            {/*<RowsAndQuestionPane/>*/}
            {/*<ClueImage/>*/}
            {/*<Points/>*/}
            {/*<CandidateAnswer/>*/}
            {/*<CandidateGranted/>*/}
        </div>;
    }
}