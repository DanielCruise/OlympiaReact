import React from 'react';
import '../StyleElements/WarmingUpAndFinishing/MainInfo.css';

export default class MainTheme extends React.Component {
    render() {
        return (
            <div className="WholePanes">
                <div className="CandidateAndQuestion">
                    <div className="BigCandidatePane">
                        <p>CHÍNH THỤY(50)</p>
                        <p>VĂN THIỆU(70)</p>
                        <p>ĐÌNH ĐỨC(60)</p>
                        <p>XUÂN PHONG(90)</p>
                    </div>
                    <div className="Question">
                        <p>Ngày 05/07/1885 đánh dấu sự bùng nổ của phong trào nào?</p>
                    </div>
                </div>
                <div className="Point">
                    <p>100</p>
                </div>
            </div>
        );
    }
}