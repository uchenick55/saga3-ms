import React, {memo} from "react";
import Image from "react-bootstrap/Image";
import s from "./Posts.module.css"
import {NavLink} from "react-router-dom";
import {AllPostsActions} from "../../redux/reducers/all-posts-reducer";
import Avatar from "../../assets/svg/avatar-default.svg";

type PostItemType = {
    "userId": number, // ID автора статей
    "id": number, // id статьи
    "title": string, // заголовок статьи
    "body": string // тело статьи
    Avatar: string // общая картирнка аватара статьи
    getComments: (id: number) => void // колбек для диспатча получить комментарии статьи
}
const PostItem: React.FC<PostItemType> = memo( ({body, title, userId, Avatar, id, getComments}) => {
    console.log("PostItem")
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

    </div>
})
export default PostItem