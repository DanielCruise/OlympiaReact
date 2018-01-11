import React from 'react';
import "../../Stylesheet/GeneralStyles/DropList.css";

export default class DropListActions extends React.Component {
    render() {
        return (
            <div>
                <div className="dropdown" id="actions" style={{position: "fixed", zIndex: 5}}>
                    <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"></button>
                    <div className="dropdown-menu">
                        {
                            this.props.actions.map((action, i) => <Actions key={i} actionActive={action.innerAction}
                                                                           functionCalled={action.callTo}/>)
                        }
                    </div>
                </div>
            </div>
        );

    }
}

class Actions extends React.Component {
    render() {
        return (
            <p className="dropdown-item" style={{fontWeight: "bold"}} onClick={this.props.functionCalled}>{this.props.actionActive}</p>
        );
    }
}