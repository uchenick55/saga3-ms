import React from "react";
import {errorType} from "../common/commonTypes/commonTypes";
type errorsRenderType = {
    Errors: errorType
}
const ErrorsRender: React.FC<errorsRenderType> = ({Errors}) => {
    console.log("ErrorsRender")
    return <div className="d-flex justify-content-center my-5 py-5">
        <h3>{Errors.message}</h3>
    </div>
}
export default ErrorsRender