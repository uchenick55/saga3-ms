import React, {memo, useMemo} from "react";
import Image from "react-bootstrap/Image";
import s from "./Posts.module.css"
import {NavLink} from "react-router-dom";
import {AllPostsActions} from "../../redux/reducers/all-posts-reducer";
import Avatar from "../../assets/svg/avatar-default.svg";
import {CommentType} from "../../common/commonTypes/commonTypes";
import CommentItem from "./CommentItem";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";

type PostItemType = {
    "userId": number, // ID автора статей
    "id": number, // id статьи
    "title": string, // заголовок статьи
    "body": string // тело статьи
    Avatar: string // общая картирнка аватара статьи
    getComments: (id: number) => void // колбек для диспатча получить комментарии статьи
}
const PostItem: React.FC<PostItemType> = memo( ({body, title, userId, Avatar, id, getComments}) => {
    console.log( "PostItem" )
    const AllComments: Array<CommentType> =
        useSelector( (state: GlobalStateType) => state.allPosts.AllComments )
    const CommentsFilteredById: Array<CommentType> = useMemo( () => AllComments.filter( comment => comment.postId === id ), [AllComments] )

    return <div>
        <NavLink to={'/user-posts/' + userId}>
            <Image fluid={true} src={Avatar} className={s.PostItemImage}
                   alt={"Аватар пользователя"} title={`Все посты пользователя ${userId}`}
            />
        </NavLink>
        <h3>
            {title}
        </h3>
        <div>
            {body}
        </div>
        <button onClick={() => {
            getComments( id )
        }
        }>
            Комментарии
        </button>
        {CommentsFilteredById.map( (comment: CommentType) => {
            const {id, name, email, body} = comment
            console.log("CommentsFilteredById")
            return <div key={id}>

                <div>{email}</div>
                <div>{name}</div>
                <div>{body}</div>
            </div>
        } )}

    </div>
} )
export default PostItem