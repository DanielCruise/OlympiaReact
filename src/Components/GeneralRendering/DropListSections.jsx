import React from 'react';
import {NavLink} from 'react-router-dom';
import "../../Stylesheet/GeneralStyles/DropList.css";

export default class DropListActions extends React.Component {
    render() {
        let ElementStyle = {
            textDecoration: "none",
            color: "black"
        };
        return (
            <div>
                <div className="dropdown" id="sections" style={{position: "fixed", zIndex: 5}}>
                    <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"></button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <p className="dropdown-item">
                            <NavLink to="/result-showing" style={ElementStyle}>TỔNG KẾT ĐIỂM</NavLink>
                        </p>
                        <p className="dropdown-item">
                            <NavLink to="/warming-up" style={ElementStyle}>KHỞI ĐỘNG</NavLink>
                        </p>
                        <p className="dropdown-item"><
                            NavLink to="/obstacle" style={ElementStyle}>VƯỢT CHƯỚNG NGẠI VẬT</NavLink>
                        </p>
                        <p className="dropdown-item">
                            <NavLink to="/acceleration" style={ElementStyle}>TĂNG TỐC</NavLink>
                        </p>
                        <p className="dropdown-item">
                            <NavLink to="/finishing" style={ElementStyle}>VỀ ĐÍCH</NavLink>
                        </p>
                        <p className="dropdown-item">
                            <NavLink to="/extra-section" style={ElementStyle}>CÂU HỎI PHỤ</NavLink>
                        </p>
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