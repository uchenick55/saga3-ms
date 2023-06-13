import React, {ReactNode} from "react";
import {nulableType} from "../commonTypes/commonTypes";
type errorBoundaryPropsType = {
    children: ReactNode
}

type errorType = Error
type errorInfoType = {
    componentStack: string
}

type errorBoundaryStateType = {
    error: nulableType<errorType>,
    errorInfo: nulableType<errorInfoType>
}
class ErrorBoundary extends React.Component <errorBoundaryPropsType, errorBoundaryStateType> {
    constructor(props:errorBoundaryPropsType) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: nulableType<errorType>, errorInfo: nulableType<errorInfoType>) {
        //Засетать в локал стейт ошибки из вложенных компонентах, если появятся при рендере
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // При отсутствии ошибок рендерить тело children (дочернюю компоненту)
        return this.props.children;
    }
}

export default ErrorBoundary
