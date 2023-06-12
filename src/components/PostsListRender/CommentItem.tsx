import React, {memo} from "react";
type CommentItemType = {
    "name": string// заголовок комментария
    "email": string, // почта того, кто оставил комментарий
    "body": string // тело комментария
}
const CommentItem: React.FC<CommentItemType> = memo( ({email, name, body}) => {
    console.log( "мапинг комментариев" )
    return <div>
        <b>{email}</b>
        <div>{body}</div>
    </div>
})
export default CommentItem