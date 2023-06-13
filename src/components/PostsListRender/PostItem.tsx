import React, {memo} from "react";
import Image from "react-bootstrap/Image";
import s from "./Posts.module.css"
import {NavLink} from "react-router-dom";
import {commentType} from "../../common/commonTypes/commonTypes";
import {useSelector} from "react-redux";
import {globalStateType} from "../../redux/store/store-redux";
import CommentItem from "./CommentItem";
import {Button} from "react-bootstrap";

type postItemType = {
    "userId": number, // ID автора статей
    "id": number, // id статьи
    "title": string, // заголовок статьи
    "body": string // тело статьи
    avatar: string // общая картирнка аватара статьи
    getComments: (id: number) => void // колбек для диспатча получить комментарии статьи
}
const PostItem: React.FC<postItemType> = memo( ({body, title, userId, avatar, id, getComments}) => {
    console.log( "PostItem" )
    const allComments: Array<commentType> =
        useSelector( (state: globalStateType) => state.allPosts.allComments ) // получить комментарии
    const showComments: Array<number> =
        useSelector( (state: globalStateType) => state.allPosts.showComments ) // показать / скрыть комментарии
    const commentsFilteredById: Array<commentType> = allComments.filter( comment => comment.postId === id )

    return <div className='my-4'>
        {/* аватарка автора поста со ссылкой на его страницу */}
        <NavLink to={'/user-posts/' + userId}>
            <Image fluid={true} src={avatar} className="float-start my-2 mx-4 shadow rounded" style={{width: "5rem"}}
                   alt={"Аватар пользователя"} title={`Все посты пользователя ${userId}`}
            />
        </NavLink>
        <h5><b>{title}</b></h5>
        <div className="flex-grow-1 ms-3">
            <div> {body} </div>
        </div>


        <div className='d-flex justify-content-end my-2'>
            <Button className='btn-sm btn-secondary' onClick={() => {
                getComments( id )
            }}>
                Комментарии
            </Button>
        </div>

        {showComments.includes( id ) && commentsFilteredById.map( (comment: commentType) => {
            const {id, name, email, body} = comment
            return <CommentItem key={id} name={name} body={body} email={email}/>
        } )}

    </div>
} )
export default PostItem