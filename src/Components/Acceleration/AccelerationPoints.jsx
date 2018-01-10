import React from 'react';
import "../../Stylesheet/Obstacle/Points.css";

export default class AccelerationPoints extends React.Component {
    render() {
        return (
            <div className="AccelerationPointsRender">
                <div className="AccelerationAddPoint">
                    <div className="AccelerationPt1">
                        <p>40</p>
                        <p>30</p>
                        <p>20</p>
                        <p>10</p>
                    </div>
                    <div className="AccelerationPt2">
                        <p>40</p>
                        <p>30</p>
                        <p>20</p>
                        <p>10</p>
                    </div>
                    <div className="AccelerationPt3">
                        <p>40</p>
                        <p>30</p>
                        <p>20</p>
                        <p>10</p>
                    </div>
                    <div className="AccelerationPt4">
                        <p>40</p>
                        <p>30</p>
                        <p>20</p>
                        <p>10</p>
                    </div>
                </div>
                <div className="AccelerationNames">
                    <p>CHÍNH THỤY</p>
                    <p>VĂN THIỆU</p>
                    <p>ĐÌNH ĐỨC</p>
                    <p>XUÂN PHONG</p>
                </div>
                <div className="AccelerationPoints">
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                </div>

                <div className="AccelerationSectionName">
                    <i>TĂNG TỐC</i>
                </div>
            </div>
        );
    }
}