import React, {memo} from "react";
type CommentItemType = {
    "name": "quo vero reiciendis velit similique earum", // заголовок комментария
    "email": "Jayne_Kuhic@sydney.com", // почта того, кто оставил комментарий
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"

}
const CommentItem: React.FC<CommentItemType> = memo( ({email, name, body}) => {
    return <div>
        <div>{email}</div>
        <div>{name}</div>
        <div>{body}</div>

    </div>
})
export default CommentItem