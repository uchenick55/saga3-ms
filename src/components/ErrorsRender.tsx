import React from "react";
import {ErrorType} from "../common/commonTypes/commonTypes";
type ErrorsRenderType = {
    Errors: ErrorType
}
const ErrorsRender: React.FC<ErrorsRenderType> = ({Errors}) => {
    console.log("ErrorsRender")
    return <div className="col-md-8 offset-md-2 my-5">
        <h3>{Errors.stack}</h3>
    </div>
}
export default ErrorsRender