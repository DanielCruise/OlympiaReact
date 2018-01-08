import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropListActions extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Dropdown style={{position: "fixed", color: "black", zIndex: 5}} size="sm">
                <DropdownToggle caret>=</DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>THÍ SINH TIẾP THEO</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>CẬP NHẬT ĐIỂM</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>TỔNG KẾT ĐIỂM</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}