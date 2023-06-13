import React from "react";
import {useParams} from "react-router-dom";

let withRouter = (Children) => {
    const WithRouterWithProps = (props) => {
        const itemId=Number({params: useParams()}.params['*']);
        return <Children {...props} itemId={itemId}/>
    }
    return WithRouterWithProps
}
export default withRouter
