import React from "react";
import {sectionName} from '../../Stylesheet/GeneralStyles/SectionAndMainCandidate';

export default class SectionName extends React.Component {
    render() {
        return (
          <div>
              <p style={sectionName}>{this.props.sectionName}</p>
          </div>
        );
    }
}
