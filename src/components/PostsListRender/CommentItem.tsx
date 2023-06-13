import React, {memo} from "react";
type CommentItemType = {
    "name": string// заголовок комментария
    "email": string, // почта того, кто оставил комментарий
    "body": string // тело комментария
}
const CommentItem: React.FC<CommentItemType> = memo( ({email, name, body}) => {
    console.log( "мапинг комментариев" )
    return <div className='d-flex justify-content-end'>
        <div className="card p-3 m-2" style={{width: "90%"}}>

            <b>{email}</b>
            <div className='d-flex justify-content-end'>
                <div style={{width: "90%"}}>{body}</div>
            </div>

        </div>
    </div>
})
export default CommentItem