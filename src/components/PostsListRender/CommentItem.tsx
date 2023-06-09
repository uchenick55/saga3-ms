import React, {memo} from "react";
type commentItemType = {
    "name": string// заголовок комментария
    "email": string, // почта того, кто оставил комментарий
    "body": string // тело комментария
}
const CommentItem: React.FC<commentItemType> = memo( ({email, name, body}) => {
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