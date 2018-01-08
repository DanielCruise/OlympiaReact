import React from 'react';
import "../StyleElements/GeneralStyles/DropListActions.css";

export default class DropListActions extends React.Component {
    render() {
        return (
            <div className="dropdown" style={{position: "fixed", zIndex: 5}}>
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"></button>
                <div className="dropdown-menu">
                    <p className="dropdown-item">THÍ SINH TIẾP THEO</p>
                    <p className="dropdown-item">CẬP NHẬT ĐIỂM</p>
                    <p className="dropdown-item">TỔNG KẾT ĐIỂM</p>
                </div>
            </div>
        );

    }
}