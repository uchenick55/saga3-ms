import React from "react";
import {ErrorType} from "../common/commonTypes/commonTypes";
type ErrorsRenderType = {
    Errors: ErrorType
}
const ErrorsRender: React.FC<ErrorsRenderType> = ({Errors}) => {
    console.log("ErrorsRender")
    return <div className="d-flex justify-content-center my-5 py-5">
        <h3>{Errors.message}</h3>
    </div>
}
export default ErrorsRender