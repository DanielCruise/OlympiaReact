import React from "react";
import "../../Stylesheet/Obstacle/RowsAndLetters.css";

export default class RowsAndQuestionPane extends React.Component {
    render() {
        return (
            <div className="Whole">
                <div className="Rows">
                    <div className="allRows"> {/*each row has 25 letters*/}
                        <div className="Row1">
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p>
                        </div>
                        <div className="Row2">
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p>
                        </div>
                        <div className="Row3">
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p>
                        </div>
                        <div className="Row4">
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                            <p></p><p></p><p></p><p></p><p></p>
                        </div>
                    </div>
                    <div className="RowIndexes">
                        <p>1</p><p>2</p><p>3</p><p>4</p>
                    </div>
                </div>

                <div className="QuestionPane">
                    <p>Vĩ tuyến nào ở Bắc bán cầu chạy ngang qua dãy núi Bạch Mã?</p>
                </div>
            </div>
        );
    }
}