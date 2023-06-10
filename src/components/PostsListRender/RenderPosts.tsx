import {PostType} from "../../common/commonTypes/commonTypes";
import React from "react";
import PostItem from "./PostItem";
import Avatar from "../../assets/svg/avatar-default.svg";

type RenderPostsType = {
    PostsList: Array<PostType>,
    getComments: (postId: number) => void
}
const RenderPosts:React.FC<RenderPostsType> = ({PostsList, getComments}) => {
    return <div>{
        PostsList// Во всех отсортированных и отфильтрованых постах с сервера
            .map( (postItem, ind) => { // пробегаем по массиву
                    const {body, id, title, userId} = postItem // извлекаем данные из массива постов
                    return <PostItem key={ind} body={body} title={title}
                                     userId={userId} Avatar={Avatar} id={id}
                                     getComments={getComments}/> // отрисовка одного поста
                }
            )
    }</div>
}
export default RenderPosts