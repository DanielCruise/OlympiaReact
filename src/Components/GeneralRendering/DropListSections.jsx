import React from 'react';
import "../../Stylesheet/GeneralStyles/DropList.css";

export default class DropListActions extends React.Component {
    render() {
        return (
            <div>
                <div className="dropdown" id="sections" style={{position: "fixed", zIndex: 5}}>
                    <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"></button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <p className="dropdown-item">TỔNG KẾT ĐIỂM</p>
                        <p className="dropdown-item">KHỞI ĐỘNG</p>
                        <p className="dropdown-item">VƯỢT CHƯỚNG NGẠI VẬT</p>
                        <p className="dropdown-item">TĂNG TỐC</p>
                        <p className="dropdown-item">VỀ ĐÍCH</p>
                        <p className="dropdown-item">CÂU HỎI PHỤ</p>
                    </div>
                </div>
            </div>
        );

    }
}

class Actions extends React.Component {
    render() {
        return (
            <p className="dropdown-item" style={{fontWeight: "bold"}}>{this.props.action}</p>
        );
    }
}