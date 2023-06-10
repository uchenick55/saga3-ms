import React from "react";
import {useParams} from "react-router-dom";

let withRouter = (Children) => {
    const WithRouterWithProps = (props) => {
        const ItemId=Number({params: useParams()}.params['*']);
        return <Children {...props} ItemId={ItemId}/>
    }
    return WithRouterWithProps
}
export default withRouter
