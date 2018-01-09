import React from 'react';
import "../../Stylesheet/GeneralStyles/DropListActions.css";

export default class DropListActions extends React.Component {
    render() {
        return (
            <div>
                <div className="dropdown" style={{position: "fixed", zIndex: 5}}>
                    <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"></button>
                    <div className="dropdown-menu">
                        {this.props.actions.map((action, i) => <Actions key = {i}
                                                                        action = {action} />)}
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