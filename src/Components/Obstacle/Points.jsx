import React from 'react';
import "../../Stylesheet/Obstacle/Points.css";

export default class Points extends React.Component {
    render() {
        return (
            <div className="All">
                <div className="AddPointInAdv">
                    <div className="PtInAdv1">
                        <p>1/2</p>
                        <p>120</p>
                    </div>
                    <div className="PtInAdv2">
                        <p>1/2</p>
                        <p>120</p>
                    </div>
                    <div className="PtInAdv3">
                        <p>1/2</p>
                        <p>120</p>
                    </div>
                    <div className="PtInAdv4">
                        <p>1/2</p>
                        <p>120</p>
                    </div>
                </div>
                <div className="AddPointInRows">
                    <div className="PtInRows1">
                        <p>80</p>
                        <p>60</p>
                        <p>40</p>
                        <p>20</p>
                    </div>
                    <div className="PtInRows2">
                        <p>80</p>
                        <p>60</p>
                        <p>40</p>
                        <p>20</p>
                    </div>
                    <div className="PtInRows3">
                        <p>80</p>
                        <p>60</p>
                        <p>40</p>
                        <p>20</p>
                    </div>
                    <div className="PtInRows4">
                        <p>80</p>
                        <p>60</p>
                        <p>40</p>
                        <p>20</p>
                    </div>
                </div>
                <div className="Names">
                    <p>CHÍNH THỤY</p>
                    <p>VĂN THIỆU</p>
                    <p>ĐÌNH ĐỨC</p>
                    <p>XUÂN PHONG</p>
                </div>
                <div className="Points">
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                </div>

                <div className="SectionName">
                    <i>VƯỢT CHƯỚNG NGẠI VẬT</i>
                </div>
            </div>
        );
    }
}