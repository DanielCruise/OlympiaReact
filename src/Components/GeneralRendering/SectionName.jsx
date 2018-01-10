import React from "react";
import '../../Stylesheet/GeneralStyles/SectionNameAndBackground.css';

export default class SectionName extends React.Component {
    render() {
        return (
          <div>
              <p className="sectionName">{this.props.sectionName}</p>
          </div>
        );
    }
}
