import React, {memo} from "react";
import Image from "react-bootstrap/Image";
import s from "./Posts.module.css"
import {NavLink} from "react-router-dom";
import {CommentType} from "../../common/commonTypes/commonTypes";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import CommentItem from "./CommentItem";

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
        useSelector( (state: GlobalStateType) => state.allPosts.AllComments ) // получить комментарии
    const ShowComments: Array<number> =
        useSelector( (state: GlobalStateType) => state.allPosts.ShowComments ) // показать / скрыть комментарии
    const CommentsFilteredById: Array<CommentType> = AllComments.filter( comment => comment.postId === id )

    return <div>
        <NavLink to={'/user-posts/' + userId}>
            <Image fluid={true} src={Avatar} className={s.PostItemImage}
                   alt={"Аватар пользователя"} title={`Все посты пользователя ${userId}`}
            />
        </NavLink>
        <h3> {title} </h3>
        <div> {body} </div>
        <button onClick={() => {
            getComments( id )
        }}>
            Комментарии
        </button>
        {ShowComments.includes(id) && CommentsFilteredById.map( (comment: CommentType) => {
            const {id, name, email, body} = comment
            return <CommentItem key={id} name={name} body={body} email={email}/>
        } )}

    </div>
} )
export default PostItem