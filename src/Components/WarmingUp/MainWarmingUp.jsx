import React from "react";
import SectionName from "./SectionName";
import CandidateNamePanes from "./CandidateNamePanes";
import {backgroundImage} from "../StyleElements/WarmingUpAndFinishing/SectionAndMainCandidate";

export default class MainWarmingUp extends React.Component {
    render() {
        return (
          <div style={backgroundImage}>
              <SectionName/>
              <CandidateNamePanes/>
          </div>
        );
    }
}
