import React from 'react';
import '../../Stylesheet/Finishing/FinishingMainInfo.css';


export default class MainTheme extends React.Component {
    render() {
        return (
            <div className="FinishingWholePanes">
                <div className="FinishingCandidateAndQuestion">
                    <div className="FinishingBigCandidatePane">
                        <p>CHÍNH THỤY(50)</p>
                        <p>VĂN THIỆU(70)</p>
                        <p>ĐÌNH ĐỨC(60)</p>
                        <p>XUÂN PHONG(90)</p>
                    </div>
                    <div className="FinishingQuestion">
                        <p>Ngày 05/07/1885 đánh dấu sự bùng nổ của phong trào nào?</p>
                    </div>
                </div>
                <div className="FinishingPoint">
                    <p>100</p>
                </div>
            </div>
        );
    }
}