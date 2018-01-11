import React from "react";
import TopNamesAndPoints from "../GeneralRendering/TopNamesAndPoints";
import DropListActions from "../GeneralRendering/DropListActions";
import SectionName from "../GeneralRendering/SectionName";
import Rows from "./Rows";
import QuestionPane from "./QuestionPane";
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
                    {
                        "innerAction": "VÀO PHẦN THI",
                        "callTo": this.ObstacleToggleRows
                    },
                    {
                        "innerAction": "Ô MẠO HIỂM",
                        "callTo": this.ObstacleToggleAdventurousSection
                    },
                    {
                        "innerAction": "CÂU TRẢ LỜI HÀNG NGANG",
                        "callTo": this.ObstacleToggleCandidateAnswers
                    },
                    {
                        "innerAction": "QUAY LẠI GIAO DIỆN CHÍNH",
                        "callTo": this.ObstacleToggleMainTheme
                    },
                    {
                        "innerAction": "HÌNH ẢNH GỢI Ý",
                        "callTo": this.ObstacleToggleClueImage
                    },
                    {
                        "innerAction": "ĐIỂM THÍ SINH",
                        "callTo": this.ObstacleTogglePoints
                    },
                    {
                        "innerAction": "HIỆN TOÀN BỘ HÀNG NGANG",
                        "callTo": null
                    },
                    {
                        "innerAction": "HIỆN TOÀN BỘ HÌNH ẢNH",
                        "callTo": null
                    },
                    {
                        "innerAction": "CÂU HỎI Ô TRUNG TÂM",
                        "callTo": this.ObstacleToggleCenterPieceQuestion
                    },
                    {
                        "innerAction": "15S CUỐI CÙNG",
                        "callTo": this.ObstacleToggleFinalFifteenSeconds
                    },
                    {
                        "innerAction": "CẬP NHẬT ĐIỂM",
                        "callTo": null
                    },
                ],
            adventurousSectionActions:
                [
                    {
                        "innerAction": "5S QUYẾT ĐỊNH",
                        "callTo": null
                    },
                    {
                        "innerAction": "15S CHO CÂU HỎI GỢI Ý",
                        "callTo": null
                    },
                    {
                        "innerAction": "30S SUY NGHĨ CNV",
                        "callTo": null
                    },
                    {
                        "innerAction":"THOÁT",
                        "callTo": this.ObstacleToggleMainTheme
                    }
                ],
            obstacleShowTopPointAndSectionName: true,
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: false,
            obstacleShowQuestion: false,
            obstacleShowPoints: false,
            obstacleShowClueImage: false,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: false,

            sectionName: "VƯỢT CHƯỚNG NGẠI VẬT"
        };

        this.ObstacleToggleAdventurousSection = this.ObstacleToggleAdventurousSection.bind(this);
        this.ObstacleToggleCandidateAnswers = this.ObstacleToggleCandidateAnswers.bind(this);
        this.ObstacleToggleCenterPieceQuestion = this.ObstacleToggleCenterPieceQuestion.bind(this);
        this.ObstacleToggleClueImage = this.ObstacleToggleClueImage.bind(this);
        this.ObstacleToggleFinalFifteenSeconds = this.ObstacleToggleFinalFifteenSeconds.bind(this);
        this.ObstacleToggleMainTheme = this.ObstacleToggleMainTheme.bind(this);
        this.ObstacleTogglePoints = this.ObstacleTogglePoints.bind(this);
    }

    ObstacleToggleMainTheme = () => {
        this.setState({
            obstacleShowTopPointAndSectionName: false,
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: true,
            obstacleShowPoints: false,
            obstacleShowQuestion: true,
            obstacleShowClueImage: false,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: false,
        });
    };

    ObstacleToggleRows = () => {
        this.setState({
            obstacleShowTopPointAndSectionName: false,
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: true,
            obstacleShowPoints: false,
            obstacleShowQuestion: false,
            obstacleShowClueImage: false,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: false,
        });
    };

    ObstacleTogglePoints = () => {
        this.setState({
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: false,
            obstacleShowPoints: true,
            obstacleShowQuestion: false,
            obstacleShowClueImage: false,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: false,
        });
    };

    ObstacleToggleCandidateAnswers = () => {
        this.setState({
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: true,
            obstacleShowRows: false,
            obstacleShowPoints: false,
            obstacleShowQuestion: false,
            obstacleShowClueImage: false,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: false,
        });
    };

    ObstacleToggleAdventurousSection = () => {
        this.setState({
            obstacleAdventurousSection: true,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: false,
            obstacleShowPoints: false,
            obstacleShowQuestion: false,
            obstacleShowClueImage: false,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: false,
        });
    };

    ObstacleToggleClueImage = () => {
        this.setState({
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: false,
            obstacleShowPoints: false,
            obstacleShowQuestion: false,
            obstacleShowClueImage: true,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: false,
        });
    };

    ObstacleToggleCenterPieceQuestion = () => {
        this.setState({
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: false,
            obstacleShowPoints: false,
            obstacleShowQuestion: true,
            obstacleShowClueImage: true,
            obstacleShowCenterPieceQuestion: true,
            obstacleFinalFifteenSeconds: false,
        });
    };

    ObstacleToggleFinalFifteenSeconds = () => {
        this.setState({
            obstacleAdventurousSection: false,
            obstacleShowCandidateAnswers: false,
            obstacleShowRows: false,
            obstacleShowPoints: false,
            obstacleShowQuestion: true,
            obstacleShowClueImage: true,
            obstacleShowCenterPieceQuestion: false,
            obstacleFinalFifteenSeconds: true,
        });
    };


    render() {
        return <div className="obstacleBackground">
            <DropListActions actions={this.state.actions}/>
            {
                this.state.obstacleShowTopPointAndSectionName ?
                    <div>
                        <TopNamesAndPoints/>
                        <SectionName sectionName={this.state.sectionName}/>
                    </div> : null
            }
            {this.state.obstacleShowRows ? <Rows/> : null}
            {this.state.obstacleShowQuestion ? <QuestionPane/> : null}
            {this.state.obstacleShowClueImage ? <ClueImage/> : null}
            {this.state.obstacleShowPoints ? <Points/> : null}
            {this.state.obstacleShowCandidateAnswers ? <CandidateAnswer/> : null}
            <CandidateGranted/>
            {
                this.state.obstacleAdventurousSection ?
                    <div>
                        <DropListActions actions={this.state.adventurousSectionActions}/>
                        <AdventurousSection/>
                    </div> : null
            }
        </div>;
    }
}