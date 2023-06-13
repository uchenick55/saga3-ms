import {postType} from "../../common/commonTypes/commonTypes";
import React from "react";
import PostItem from "./PostItem";
import Avatar from "../../assets/svg/avatar-default.svg";

type renderPostsType = {
    postsList: Array<postType>,
    getComments: (postId: number) => void
}
const RenderPosts:React.FC<renderPostsType> = ({postsList, getComments}) => {
    console.log("RenderPosts")
    return <div>{
        postsList// Во всех отсортированных и отфильтрованых постах с сервера
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