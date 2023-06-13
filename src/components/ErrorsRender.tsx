import React from "react";
import {errorType} from "../common/commonTypes/commonTypes";
type errorsRenderType = {
    error: errorType
}
const ErrorsRender: React.FC<errorsRenderType> = ({error}) => {
    console.log("ErrorsRender")
    return <div className="d-flex justify-content-center my-5 py-5">
        <h3>{error.message}</h3>
    </div>
}
export default ErrorsRender